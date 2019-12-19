import React, { useState, SyntheticEvent } from 'react';
import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';
import styled from 'styled-components';
import {
  Maybe,
  GetCategoriesAssetsQuery,
  GetCategoriesAssetsQueryVariables,
  GalleryType_Category,
  Gallery_Asset,
} from 'types.d';
import SideSelector from './Selector';
import Photos from './Photos';

const GallerySection = styled.section`
  @media (min-width: 768px) {
    display: flex;
  }
`;

const ASSET_CATEGORY_QUERY = gql`
  query getCategoriesAssets {
    categories(groupId: 1) {
      id
      title
    }
    assets(folderId: 1, includeSubfolders: true, volume: "gallery") {
      ... on gallery_Asset {
        title
        url
        gallerySummary
        galleryCategory {
          id
          title
        }
      }
    }
  }
`;

function Gallery() {
  const timer = 1000;
  const [images, setImages] = useState<Maybe<Array<Gallery_Asset>>>(null);

  const [categories, setCategories] = useState<
    Maybe<Array<Maybe<GalleryType_Category>>>
  >(null);

  const [active, setActive] = useState<Maybe<GalleryType_Category>>(null);

  const { data, loading, error } = useQuery<
    GetCategoriesAssetsQuery,
    GetCategoriesAssetsQueryVariables
  >(ASSET_CATEGORY_QUERY);

  if (loading || error) return null;

  if (data && !active) {
    if (!active) {
      setActive(data?.categories?.[0] || null);
      setCategories(data?.categories);
    }

    if (!images && Array.isArray(data?.assets)) {
      const assets = data?.assets as Array<Gallery_Asset>;
      setImages(assets);
    }
  }

  const mobileSelectionState = (
    expand = true,
    current: GalleryType_Category,
  ) => {
    const container = document.querySelector('#side-selector')!;
    const wrapper = container.querySelector('div')!;
    const buttons = Array.from(container.querySelectorAll('button'));
    const buttonHeight = buttons[0].offsetHeight + 2 - 1;
    const height = buttonHeight * buttons.length;
    if (expand) {
      wrapper.style.height = `${height}px`;
      wrapper.style.transition = `height ${timer}ms`;
      return;
    }
    const currentNode = buttons.find(
      button => button.getAttribute('data-id') === current?.id?.toString(),
    );
    if (currentNode) {
      const placement = buttons.indexOf(currentNode);
      const holderNode = document.createElement('div');
      // Set Holder
      wrapper.insertBefore(holderNode, currentNode);
      // Move Current Node
      currentNode.style.transform = `translateY(-${buttonHeight *
        (placement + 1)}px)`;
      currentNode.style.transition = `transform ${timer}ms`;
      currentNode.style.position = `absolute`;
      // Transition Holder
      holderNode.style.height = `${buttonHeight}px`;
      // Remove Transition
      wrapper.style.transition = `none`;
      // Animation
      let wrapperHeight = wrapper.offsetHeight;
      let from = buttonHeight;
      let to = 0;
      let frames = 30;
      const amount = buttonHeight / frames;
      const wrapperAmount = wrapperHeight / frames;
      const resizeAnimation = () => {
        from -= amount;
        to += amount;
        wrapperHeight -= wrapperAmount;
        holderNode.style.height = `${from}px`;
        wrapper.style.paddingTop = `${to}px`;
        wrapper.style.height = `${wrapperHeight}px`;
        frames -= 1;
        if (frames > 1) {
          window.requestAnimationFrame(resizeAnimation);
        } else {
          // Reset Nodes
          const node = wrapper.removeChild(currentNode);
          wrapper.insertBefore(node, buttons[0]);
          currentNode.removeAttribute('style');
          // Remove holder
          wrapper.removeChild(holderNode);
          // Update Styling
          wrapper.style.paddingTop = `0`;
          wrapper.style.height = `${buttonHeight - 1}px`;
        }
      };
      window.requestAnimationFrame(resizeAnimation);
    }
  };

  const changeCategorySelected = (event: SyntheticEvent) => {
    const target = event.currentTarget;
    const id = target.getAttribute('data-id');
    const category = categories?.find(cat => cat?.id?.toString() === id);
    const expand = !!category;
    const animationTime = !expand ? timer : 0;

    if (category) {
      if (active === category) {
        if (window.innerWidth < 768) {
          mobileSelectionState(true, category);
        }
      }
      if (active !== category) {
        setTimeout(() => {
          setActive(category);
          if (window.innerWidth < 768) {
            mobileSelectionState(false, category);
          }
        }, animationTime);
      }
    }
  };

  return (
    <GallerySection id="side-selector">
      <SideSelector
        categories={categories}
        active={active}
        updateView={changeCategorySelected}
      />
      <Photos images={images} active={active} />
    </GallerySection>
  );
}

export default Gallery;
