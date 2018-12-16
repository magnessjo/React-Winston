//@ts-ignore
require('styles/introduction.css');

import React from 'react';
import useFetch from 'scripts/hooks/hooks/useFetch';

type ContentData = {
  data: {
    globals: {
      introduction: {
        introductionSummary: {
          content: string;
        };
        introductionImage: Array<{
          url: string;
        }>;
      };
    };
  };
};

type Query = {
  success: boolean;
  content: ContentData;
};

const categoriesQuery = JSON.stringify({
  query: `{
    globals {
      introduction {
        introductionSummary {
          content
        }
        introductionImage {
          url
        }
      }
    }
  }`,
});

const Container = () => {
  const { success, content }: Query = useFetch('/api', categoriesQuery);

  if (success) {
    const text =
      content?.data?.globals?.introduction?.introductionSummary?.content;
    const image =
      content?.data?.globals?.introduction?.introductionImage[0]?.url;

    return (
      <section id="introduction">
        <div className="lock">
          <h1>
            Winston <span>Sir-Drools-Alot</span>
          </h1>
          <img src={image} aria-hidden="true" />
          <div dangerouslySetInnerHTML={{ __html: text }}></div>
        </div>
      </section>
    );
  }

  return null;
};

export default Container;
