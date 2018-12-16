<?php

namespace modules\winstonmodule\controllers;

use modules\winstonmodule\WinstonModule;

use Craft;
use craft\web\Controller;


class GalleryController extends Controller
{

    protected $allowAnonymous = ['index'];

    public function actionIndex()
    {

      $images = WinstonModule::getInstance()->gallery->getImages();

      if ( count($images) > 0) {
        return $this->asJson([
            'success' => true,
            'images' => $images
        ]);
      } else {
        return $this->asJson([
            'success' => false,
        ]);
      }

    }

}
