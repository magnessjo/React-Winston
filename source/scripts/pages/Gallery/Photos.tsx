//@ts-ignore
require('styles/photos.css');

import React from 'react';
import { Asset, Category } from './';

type GalleryProps = {
  images: Asset[] | null;
  active: Category | null;
};

const GalleryImages: React.FC<GalleryProps> = ({ images, active }) => {
  if (images && active) {
    if (!Array.isArray(images)) return null;

    const filtered: Asset[] = images?.reduce(
      (arr: Asset[], category: Asset) => {
        category?.galleryCategory?.forEach(cat => {
          if (cat.id === active.id) arr.push(category);
        });
        return arr;
      },
      [],
    );

    return (
      <div id="photos">
        <div>
          <h1>{active.title}</h1>
          <div className="grid">
            {filtered.map((item, i) => {
              const styles = {
                backgroundImage: `url( ${item.url} )`,
              };
              return (
                <div className="grid-image" key={`Photos-${i}`} style={styles}>
                  <span>{item?.gallerySummary}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }

  return null;
};

export default GalleryImages;
