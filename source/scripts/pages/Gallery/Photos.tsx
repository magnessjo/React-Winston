import React from 'react';
import styled from 'styled-components';
import { Maybe, Gallery_Asset, GalleryType_Category } from 'types.d';

const GridImageDiv = styled.div`
  background-position: center;
  background-size: cover;
  position: relative;
  height: 80vw;
  grid-column: span 12;

  @media (min-width: 768px) {
    height: 35vw;
    grid-column: span 6;
  }

  & span {
    position: absolute;
    bottom: 0;
    padding: 10px;
    background: rgba(0, 0, 0, 0.7);
    left: 0;
    right: 0;
    text-align: center;
    color: white;
  }
`;

const GridDiv = styled.div`
  display: grid;
  grid-gap: 10px;
  grid-template-columns: repeat(12, 1fr);
  padding-bottom: 40px;
`;

const PhotosDiv = styled.section`
  position: relative;

  @media (max-width: 767px) {
    padding-bottom: 40px;
  }

  @media (min-width: 768px) {
    padding: 50px;
    width: 70vw;
  }

  & h1 {
    position: fixed;
    font-size: 20px;
    bottom: 0;
    left: 0;
    right: 0;
    text-transform: uppercase;
    letter-spacing: 3px;
    padding: 20px;
    text-align: center;
    background-color: white;
    color: #8f8f8f;
    font-family: 'Libre Baskerville', serif;
    z-index: 999;

    @media (min-width: 768px) {
      left: calc(30vw + 1px);
    }
  }
`;

const GalleryImages = ({
  images,
  active,
}: {
  images: Maybe<Array<Gallery_Asset>>;
  active: Maybe<GalleryType_Category>;
}) => {
  if (images && active) {
    if (!Array.isArray(images)) return null;

    const filtered = images.reduce((arr: Array<Gallery_Asset>, image) => {
      const shouldBeAdded = image?.galleryCategory?.find(
        cat => cat?.id === active.id,
      );
      if (shouldBeAdded) arr.push(image);
      return arr;
    }, []);

    return (
      <PhotosDiv>
        <div>
          <h1>{active.title}</h1>
          <GridDiv>
            {filtered.map(item => {
              const styles = {
                backgroundImage: `url( ${item?.url} )`,
              };
              return (
                <GridImageDiv key={`Photos-${item.url}`} style={styles}>
                  <span>{item?.gallerySummary}</span>
                </GridImageDiv>
              );
            })}
          </GridDiv>
        </div>
      </PhotosDiv>
    );
  }

  return null;
};

export default GalleryImages;
