
import deploy from 'deploy';
import config from './config.json';
import shell from 'shelljs';

const logger = deploy.logger;
const Client = deploy.remote;
const name = process.argv[2] || process.env.DEPLOY_TARGET || config.default;
const target = config.targets[name];
const remote = new Client(target.user, target.host, target.env);

remote.copy('craft/craft', `${target.destination}/craft`);
remote.copy('craft/config', `${target.destination}/craft`, '.DS_Store');
remote.copy('craft/modules', `${target.destination}/craft`, '.DS_Store');
remote.copy('craft/templates', `${target.destination}/craft`, '.DS_Store');
remote.copy('craft/vendor', `${target.destination}/craft`, '.DS_Store');
remote.copy('craft/web', `${target.destination}/craft`, ['cpresources', 'uploads', '.DS_Store']);
remote.copy('craft/composer.json', `${target.destination}/craft`, '.DS_Store');
remote.copy('craft/composer.lock', `${target.destination}/craft`, '.DS_Store');

if(name == 'production') {
  remote.exec(`sudo chown -R ec2-user:apache ${target.destination}`);
  remote.exec(`sudo chmod -R 755 ${target.destination}`);
}

remote.exec(`if [ -h ${target.destination}/craft/.env ]; then sudo unlink ${target.destination}/craft/.env; fi`);
remote.exec(`sudo ln -s ${target.destination}/config/.env ${target.destination}/craft/.env`);

remote.exec(`if [ ! -d ${target.destination}/craft/storage ]; then sudo mkdir ${target.destination}/craft/storage; fi`);
remote.exec(`sudo chmod -R 777 ${target.destination}/craft/storage`);
remote.exec(`if [ ! -d ${target.destination}/craft/web/cpresources ]; then sudo mkdir ${target.destination}/craft/web/cpresources; fi`);
remote.exec(`sudo chmod -R 777 ${target.destination}/craft/web/cpresources`);

remote.exec(`if [ -h ${target.destination}/craft/web/uploads ]; then sudo unlink ${target.destination}/craft/web/uploads; fi`);
remote.exec(`sudo ln -s ${target.destination}/shared/uploads ${target.destination}/craft/web`);

remote.exec(`sudo chmod -R 775 ${target.destination}`);

remote.exec(`${target.destination}/craft/craft migrate/all`);
