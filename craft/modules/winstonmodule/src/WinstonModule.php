<?php

namespace modules\winstonmodule;

use modules\winstonmodule\assetbundles\winstonmodule\WinstonModuleAsset;
use modules\winstonmodule\services\GalleryService;
use modules\winstonmodule\services\AboutService;

use Craft;
use craft\events\RegisterTemplateRootsEvent;
use craft\events\TemplateEvent;
use craft\i18n\PhpMessageSource;
use craft\web\View;
use craft\web\UrlManager;
use craft\events\RegisterUrlRulesEvent;

use yii\base\Event;
use yii\base\InvalidConfigException;
use yii\base\Module;

class WinstonModule extends Module
{

    public static $instance;

    public function __construct($id, $parent = null, array $config = [])
    {
        Craft::setAlias('@modules/winstonmodule', $this->getBasePath());
        $this->controllerNamespace = 'modules\winstonmodule\controllers';

        // Base template directory
        Event::on(View::class, View::EVENT_REGISTER_CP_TEMPLATE_ROOTS, function (RegisterTemplateRootsEvent $e) {
            if (is_dir($baseDir = $this->getBasePath().DIRECTORY_SEPARATOR.'templates')) {
                $e->roots[$this->id] = $baseDir;
            }
        });

        // Set this as the global instance of this module class
        static::setInstance($this);
        parent::__construct($id, $parent, $config);
    }

    public function init()
    {
        parent::init();
        self::$instance = $this;

        // Services

        $this->setComponents([
            'gallery' => GalleryService::class,
            'about' => AboutService::class,
        ]);

        // Events

        Event::on(
            UrlManager::class,
            UrlManager::EVENT_REGISTER_SITE_URL_RULES,
            function (RegisterUrlRulesEvent $event) {
                $event->rules['/get-gallery-images'] = 'winston-module/gallery';
                $event->rules['/get-about-sections'] = 'winston-module/about';
            }
        );

      }

}
