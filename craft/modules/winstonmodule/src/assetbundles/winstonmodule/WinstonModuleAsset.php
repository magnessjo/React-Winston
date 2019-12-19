<?php
/**
 * Winston module for Craft CMS 3.x
 *
 * Winston Example
 *
 * @link      joshmagness.com
 * @copyright Copyright (c) 2018 Josh Magness
 */

namespace modules\winstonmodule\assetbundles\WinstonModule;

use Craft;
use craft\web\AssetBundle;
use craft\web\assets\cp\CpAsset;

/**
 * @author    Josh Magness
 * @package   WinstonModule
 * @since     1.0.0
 */
class WinstonModuleAsset extends AssetBundle
{
    // Public Methods
    // =========================================================================

    /**
     * @inheritdoc
     */
    public function init()
    {
        $this->sourcePath = "@modules/winstonmodule/assetbundles/winstonmodule/dist";

        $this->depends = [
            CpAsset::class,
        ];

        $this->js = [
            'js/WinstonModule.js',
        ];

        $this->css = [
            'css/WinstonModule.css',
        ];

        parent::init();
    }
}
