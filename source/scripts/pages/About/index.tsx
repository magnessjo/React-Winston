import React from 'react';
import styled from 'styled-components';
import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';
import {
  Maybe,
  About_About_Entry,
  GetAboutEntriesQuery,
  GetAboutEntriesQueryVariables,
} from 'types.d';

const AboutSummary = styled.div`
  position: relative;

  & > p:last-of-type {
    margin-bottom: 50px;
  }
`;

const AboutText = styled.div`
  @media (min-width: 768px) {
    width: 68%;
  }

  & p:last-of-type {
    margin-bottom: 0;
  }
`;

const AboutImage = styled.div`
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 767px) {
    margin-top: 30px;
  }

  @media (min-width: 768px) {
    width: 32%;
  }

  & img {
    max-width: 100%;
    display: block;
    max-height: 300px;
    clip-path: circle(50% at 50% 50%);
    -webkit-clip-path: circle(50% at 50% 50%);
  }
`;

const AboutRow = styled.div`
  margin-bottom: 80px;

  & > div {
    @media (min-width: 768px) {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    &:last-of-type {
      margin-bottom: 0;
    }
  }

  &:nth-of-type(even) > div {
    & ${AboutText} {
      order: 2;

      @media (min-width: 768px) {
        padding-left: 40px;
      }
    }

    & ${AboutImage} {
      order: 1;
    }
  }

  &:nth-of-type(odd) > div {
    & ${AboutText} {
      order: 1;

      @media (min-width: 768px) {
        padding-right: 40px;
      }
    }

    & ${AboutImage} {
      order: 2;
    }
  }
`;

const AboutSection = styled.section`
  padding: 100px 0;

  & p {
    margin-bottom: 20px;
  }

  & h1 {
    font-size: calc(24px + 1vw);
    margin-bottom: 20px;
    padding-bottom: 10px;
    position: relative;
    font-weight: 300;
    letter-spacing: 2px;
    font-family: 'Libre Baskerville', serif;
    text-transform: uppercase;

    & span {
      position: relative;
      padding-right: 40px;
      display: inline-block;
      padding-left: 10px;
      padding-bottom: 8px;

      &:before {
        content: '';
        position: absolute;
        height: 30px;
        width: 30px;
        background-image: url(/images/paws/paw.svg);
        background-size: contain;
        background-repeat: no-repeat;
        top: calc(50% - 4px);
        transform: translateY(-50%);
        right: 0;
      }

      &:after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        height: 1px;
        background-color: black;
        right: 0;

        @media (min-width: 650px) {
          right: -70px;
        }
      }
    }
  }

  & h2 {
    font-size: 22px;
    margin-bottom: 20px;
    text-transform: capitalize;

    & span {
      position: relative;
      display: inline-block;

      &:after {
        content: '';
        position: absolute;
        height: 30px;
        width: 60px;
        background-image: url(/images/paws/paws-walk.svg);
        background-size: contain;
        background-repeat: no-repeat;
        background-position: left center;
        top: 50%;
        transform: translateY(-50%);
        right: -70px;
      }
    }
  }
`;

const ABOUT_QUERY = gql`
  query getAboutEntries {
    entries(section: ["about"]) {
      title
      url
      ... on about_about_Entry {
        aboutType
        aboutImage {
          url
        }
        aboutText
      }
    }
  }
`;

const EntryTypeSwitcher = ({
  content,
}: {
  content: Maybe<About_About_Entry>;
}) => {
  const title = content?.title;
  const aboutText = content?.aboutText;
  const image = content?.aboutImage?.[0]?.url;

  if (content?.aboutType === 'intro') {
    return (
      <div>
        <h1>
          <span>{title}</span>
        </h1>
        <AboutSummary dangerouslySetInnerHTML={{ __html: aboutText }} />
      </div>
    );
  }

  if (content?.aboutType === 'section') {
    return (
      <AboutRow>
        <div>
          <AboutText>
            <h2>
              <span>{title}</span>
            </h2>
            {aboutText && (
              <div dangerouslySetInnerHTML={{ __html: aboutText }} />
            )}
          </AboutText>
          <AboutImage>
            {image && title && <img src={image} alt={title} />}
          </AboutImage>
        </div>
      </AboutRow>
    );
  }

  return null;
};

const Container = () => {
  const { loading, error, data } = useQuery<
    GetAboutEntriesQuery,
    GetAboutEntriesQueryVariables
  >(ABOUT_QUERY);

  console.log(error);
  console.log(data);

  if (loading || error) return null;

  if (data) {
    return (
      <AboutSection>
        <div className="lock">
          {data?.entries?.map(entryContent => (
            <EntryTypeSwitcher
              content={entryContent}
              key={`about-type-${entryContent?.url}`}
            />
          ))}
        </div>
      </AboutSection>
    );
  }

  return null;
};

export default Container;
