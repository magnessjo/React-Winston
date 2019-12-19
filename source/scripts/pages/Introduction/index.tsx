import React from 'react';
import styled from 'styled-components';
import gql from 'graphql-tag';
import { useQuery } from '@apollo/react-hooks';
import { GetGlobalsQueryVariables, GetGlobalsQuery } from 'types.d';

const IntroductionSection = styled.section`
  padding: 100px 0;

  & h1 {
    font-size: calc(24px + 5vw);
    text-align: center;
    line-height: 1em;
    text-transform: uppercase;
    letter-spacing: 2px;
    font-weight: 300;
    font-family: 'Libre Baskerville', serif;

    & span {
      display: block;
      font-size: calc(24px + 0.5vw);
      font-weight: bold;
      text-transform: none;
      line-height: 1em;
      font-family: 'Lato', sans-serif;
    }
  }

  & img {
    max-height: 300px;
    max-width: 100%;
    display: block;
    margin: 40px auto;
    clip-path: circle(50% at 50% 50%);
  }

  & p {
    font-size: calc(22px + 0.2vw);
    line-height: 1.6em;
    text-align: center;
  }
`;

const GLOBALS_QUERY = gql`
  query getGlobals {
    globalSets(handle: ["introduction"]) {
      ... on introduction_GlobalSet {
        introductionImage {
          url
        }
        introductionSummary
      }
    }
  }
`;

const Container = () => {
  const { loading, error, data } = useQuery<
    GetGlobalsQuery,
    GetGlobalsQueryVariables
  >(GLOBALS_QUERY);

  if (loading || error) return null;

  if (data) {
    const set = data?.globalSets?.[0];
    const text = set?.introductionSummary;
    const image = set?.introductionImage?.[0]?.url;

    return (
      <IntroductionSection>
        <div className="lock">
          <h1>
            Winston <span>Sir-Drools-Alot</span>
          </h1>
          {image && <img src={image} alt="" aria-hidden="true" />}
          {text && <div dangerouslySetInnerHTML={{ __html: text }} />}
        </div>
      </IntroductionSection>
    );
  }

  return null;
};

export default Container;
