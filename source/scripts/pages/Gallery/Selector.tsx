import React, { SyntheticEvent } from 'react';
import styled from 'styled-components';
import { Maybe, GalleryType_Category } from 'types.d';

const SelectorSection = styled.section`
  padding-top: 20px;

  @media (min-width: 768px) {
    width: 30vw;
    min-height: calc(100vh - 97px);
    border-right: 1px solid var(--gray, #eee);
    padding: 20px 0;
  }

  & p {
    text-align: center;
    border-bottom: 1px solid var(--gray, #eee);
    padding-bottom: 20px;
    font-size: 14px;
  }

  & > div {
    @media (max-width: 767px) {
      height: 58px;
      overflow: hidden;
    }
  }

  & button {
    display: block;
    padding: 20px;
    text-transform: uppercase;
    cursor: pointer;
    text-align: center;
    width: 100%;
    font-size: 16px;
    letter-spacing: 2px;
    position: relative;
    margin-bottom: 2px;
    outline: none;
    font-weight: bold;

    @media (max-width: 767px) {
    }

    &:last-of-type {
      margin-bottom: 0;
    }

    &:hover {
      background-color: var(--gray, #eee);
    }

    &[data-active='true'] {
      position: relative;

      @media (min-width: 768px) {
        background-color: var(--gray, #eee);
      }

      &:after {
        content: '';
        position: absolute;

        @media (min-width: 768px) {
          top: 50%;
          right: -25px;
          transform: translateY(-50%);
          height: 0;
          border-top: 30px solid transparent;
          border-bottom: 30px solid transparent;
          border-left: 25px solid var(--gray, #eee);
        }
      }

      & span {
        position: relative;

        &:after {
          @media (max-width: 767px) {
            content: '';
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
            right: -25px;
            height: 0;
            width: 0;
            border-top: 8px solid black;
            border-left: 6px solid transparent;
            border-right: 6px solid transparent;
          }
        }
      }
    }
  }
`;

const GallerySelector = ({
  categories,
  active,
  updateView,
}: {
  categories: Maybe<Maybe<GalleryType_Category>[]>;
  active: Maybe<GalleryType_Category>;
  updateView: (event: SyntheticEvent<Element, Event>) => void;
}) => {
  return (
    <SelectorSection>
      <p>Select a Category of Images</p>
      <div>
        {categories &&
          categories.map(entry => (
            <button
              key={`selector-${entry?.id}`}
              onClick={updateView}
              data-active={active?.id === entry?.id}
              data-id={entry?.id}
              type="button"
            >
              <span>{entry?.title}</span>
            </button>
          ))}
      </div>
    </SelectorSection>
  );
};

export default GallerySelector;
