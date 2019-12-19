<?php

namespace modules\winstonmodule\services;

use modules\winstonmodule\WinstonModule;

use Craft;
use craft\base\Component;
use craft\services;
use craft\elements\Asset;
use craft\elements\Category;

class GalleryService extends Component
{

    public function getImages()
    {

        $json = (object)[];
        $json->categories = [];
        $categories = Category::find()->group('galleryType')->all();

        foreach($categories as &$category) {

          $cat = (object)[];
          $cat->category = $category->title;
          $cat->list = [];
          $assets = Asset::find()->relatedTo($category)->folderId(1)->all();

          foreach($assets as &$asset) {

            $obj = (object)[];
            $obj->id = $asset->id;
            $obj->filename = $asset->filename;
            $obj->summary = $asset->gallerySummary;

            array_push($cat->list, $obj);

          }

          array_push($json->categories, $cat);

        }

        return $json;
    }
}
