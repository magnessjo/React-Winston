<?php
/**
 * General Configuration
 */

return [
  '*' => [
    'defaultWeekStartDay' => 0,
    'enableCsrfProtection' => true,
    'omitScriptNameInUrls' => true,
    'cpTrigger' => 'admin',
    'securityKey' => getenv( 'SECURITY_KEY' ),
    'maxUploadFileSize' => '1073741824',
    'aliases' => [
      '@basePath' => getenv( 'BASE_PATH' ),
    ],
  ],

  'dev' => [
    'devMode' => false,
    'siteUrl' => [
      'heritage' => 'https://winston-react.localhost.dev',
    ],
  ],

  'staging' => [
    'devMode' => false,
    'siteUrl' => [
      'heritage' => 'https://winston.joshmagness.com/',
    ],
  ],

];
