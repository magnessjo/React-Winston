<?php

namespace modules\winstonmodule\services;

use modules\winstonmodule\WinstonModule;

use Craft;
use craft\base\Component;
use craft\services;
use craft\elements\Entry;
use craft\elements\Asset;

use craft\records\Section;

class AboutService extends Component
{

    public function getSections()
    {

        $json = [];

        $entries = Entry::find([
          'handle' => 'about'
        ])->all();

        foreach($entries as &$entry) {
          $newEntry = (object)[];

          $newEntry->title = $entry->title;

          $newEntry->text = $entry->about_text->getParsedContent();
          $newEntry->image = $entry->about_image->all();
          $newEntry->type = $entry->about_type;

          array_push($json, $newEntry);

        }

        return $json;
    }
}
