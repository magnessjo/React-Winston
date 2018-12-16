//@ts-ignore
require('styles/gallery.css');

import React, { useState, SyntheticEvent } from 'react';
import SideSelector from './Selector';
import Photos from './Photos';
import useFetch from 'scripts/hooks/hooks/useFetch';

export type Asset = {
  title: string;
  url: string;
  gallerySummary: string;
  galleryCategory: Array<{
    id: string;
    title: string;
  }>;
};

export type Category = {
  id: string;
  title: string;
};

type CategoryQuery = {
  success: boolean;
  content: {
    data: {
      categories: Array<Category>;
    };
  };
};

type assetsQuery = {
  success: boolean;
  content: {
    data: {
      assets: Array<Asset>;
    };
  };
};

const categoriesQuery = JSON.stringify({
  query: `{
    categories(groupId: 1) {
      id
      title
    }
  }`,
});

const assetsQuery = JSON.stringify({
  query: `{
    assets(folderId: 1) {
      title
      url
      ...on GalleryVolume {
        gallerySummary
        galleryCategory {
          id
          title
        }
      }
    }
  }`,
});

function Gallery() {
  // const timer = 1000;
  const [images, setImages] = useState<Asset[] | null>(null);
  const [categories, setCategories] = useState<Category[] | null>(null);
  const [active, setActive] = useState<Category | null>(null);

  const { ...categoryResponse }: CategoryQuery = useFetch(
    '/api',
    categoriesQuery,
  );
  const { ...assetsResponse }: assetsQuery = useFetch('/api', assetsQuery);

  if (categoryResponse.success && !active) {
    const data = categoryResponse?.content?.data;
    setActive(data?.categories[0]);
    setCategories(data?.categories);
  }

  if (assetsResponse.success && !images) {
    const assets = assetsResponse?.content?.data?.assets;
    setImages(assets);
  }

  // Event : Mobile Selected State

  function mobileSelectionState(expand = true) {
    // const container = document.querySelector('#side-selector');
    // const wrapper = container.querySelector('div');
    // const buttons = Array.from(container.querySelectorAll('button'));
    // const buttonHeight = (buttons[0].offsetHeight + 2) - 1;
    // const height = buttonHeight * buttons.length;
    // const current = this.state.active;
    //
    // if (expand) {
    //   wrapper.style.height = `${height}px`;
    //   wrapper.style.transition = `height ${this.timer}ms`;
    // } else {
    //
    //   const currentNode = buttons.find( (button) => { return button.getAttribute('data-id') == current.id });
    //   const placement = buttons.indexOf(currentNode);
    //   const holderNode = document.createElement('div');
    //
    //   // Set Holder
    //
    //   wrapper.insertBefore(holderNode, currentNode);
    //
    //   // Move Current Node
    //
    //   currentNode.style.transform = `translateY(-${buttonHeight * (placement + 1)}px)`;
    //   currentNode.style.transition = `transform ${this.timer}ms`;
    //   currentNode.style.position = `absolute`;
    //
    //   // Transition Holder
    //
    //   holderNode.style.height = `${buttonHeight}px`;
    //
    //   // Remove Transition
    //
    //   wrapper.style.transition = `none`;
    //
    //   // Animation
    //
    //   let wrapperHeight = wrapper.offsetHeight;
    //   let from = buttonHeight;
    //   let to = 0;
    //   let frames = 60;
    //   let amount = buttonHeight / frames;
    //   let wrapperAmount = wrapperHeight / frames;
    //
    //   function resizeAnimation() {
    //
    //     from = from - amount;
    //     to = to + amount;
    //     wrapperHeight = wrapperHeight - wrapperAmount;
    //     holderNode.style.height = `${from}px`;
    //     wrapper.style.paddingTop = `${to}px`;
    //     wrapper.style.height = `${wrapperHeight}px`;
    //     frames--;
    //
    //     if (frames > 1) {
    //       window.requestAnimationFrame(resizeAnimation);
    //     } else {
    //
    //       // Reset Nodes
    //       const node = wrapper.removeChild(currentNode);
    //       wrapper.insertBefore(node, buttons[0]);
    //       currentNode.removeAttribute('style');
    //
    //       // Remove holder
    //       wrapper.removeChild(holderNode);
    //
    //       // Update Styling
    //       wrapper.style.paddingTop = `0`;
    //       wrapper.style.height = `${buttonHeight - 1}px`;
    //
    //     }
    //
    //   }
    //
    //   window.requestAnimationFrame(resizeAnimation);
    //
    // }
  }

  function changeCategorySelected(event: SyntheticEvent) {
    const target = event.currentTarget;
    const id = target.getAttribute('data-id');
    const category = categories?.find(
      category => parseInt(category.id) === parseInt(id as string),
    );
    // const animationTime = this.state.expand ? this.timer : 0;
    const animationTime = 0;

    if (active == category) {
      if (window.innerWidth < 768) {
        mobileSelectionState();
      }
    } else {
      setTimeout(() => {
        setActive(category as Category);

        if (window.innerWidth < 768) {
          // mobileSelectionState(false);
        }
      }, animationTime);
    }
  }

  return (
    <section id="gallery">
      <SideSelector
        categories={categories}
        active={active}
        updateView={changeCategorySelected}
      />

      <Photos images={images} active={active} />
    </section>
  );
}

export default Gallery;
