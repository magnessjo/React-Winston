//@ts-ignore
require('styles/slide-selector.css');

import React, { SyntheticEvent } from 'react';
import { Category } from './';

type SelectorProps = {
  categories: Category[] | null;
  active: Category | null;
  updateView: (event: SyntheticEvent<Element, Event>) => void;
};

const GallerySelector: React.FC<SelectorProps> = ({
  categories,
  active,
  updateView,
}) => {
  return (
    <section id="side-selector">
      <p>Select a Category of Images</p>
      <div>
        {categories &&
          categories.map((entry, i) => (
            <button
              key={`selector-${i}`}
              onClick={updateView}
              data-active={active?.id === entry.id}
              data-id={entry.id}
            >
              <span>{entry?.title}</span>
            </button>
          ))}
      </div>
    </section>
  );
};

export default GallerySelector;
