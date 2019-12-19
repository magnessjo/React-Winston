<?php

namespace modules\winstonmodule\controllers;

use modules\winstonmodule\WinstonModule;

use Craft;
use craft\web\Controller;


class AboutController extends Controller
{

    protected $allowAnonymous = ['index'];

    public function actionIndex()
    {

      $sections = WinstonModule::getInstance()->about->getSections();

      if ( count($sections) > 0) {
        return $this->asJson([
            'success' => true,
            'sections' => $sections
        ]);
      } else {
        return $this->asJson([
            'success' => false,
        ]);
      }

    }

}
