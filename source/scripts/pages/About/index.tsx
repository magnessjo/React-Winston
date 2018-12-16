//@ts-ignore
require('styles/about.css');

import React from 'react';
import useFetch from 'scripts/hooks/hooks/useFetch';

type Content = {
  url: string;
  about_type: string;
  title: string;
  about_image: Array<{
    url: string;
  }>;
  about_text: {
    content: string;
  };
};

type ContentData = {
  data: {
    entries: Content[];
  };
};

interface ApiAbout {
  success: boolean;
  content?: ContentData;
}

const query = JSON.stringify({
  query: `{
    entries(section:[about]) {
      ...on About {
        title
        url
        about_type
        about_image {
          url
        }
        about_text {
          content
        }
      }
    }
  }`,
});

const EntryTypeSwitcher = ({ content }: { content: Content }) => {
  const title = content?.title;
  const aboutText = content?.about_text?.content;
  const image = content.about_image?.[0]?.url;

  if (content.about_type === 'intro') {
    return (
      <div>
        <h1 className="headline">
          <span>{title}</span>
        </h1>
        <div
          className="summary"
          //@ts-ignore
          dangerouslySetInnerHTML={{ __html: aboutText }}
        ></div>
      </div>
    );
  }

  if (content.about_type === 'section') {
    return (
      <div className="row">
        <div>
          <div className="text">
            <h2>
              <span>{title}</span>
            </h2>
            <div
              //@ts-ignore
              dangerouslySetInnerHTML={{ __html: aboutText }}
            ></div>
          </div>
          <div className="image">
            <img src={image} alt={title} />
          </div>
        </div>
      </div>
    );
  }

  return null;
};

const Container = () => {
  const { success, content }: ApiAbout = useFetch('/api', query);
  const entries = content?.data?.entries;

  if (success && entries) {
    return (
      <div id="about">
        <div className="lock">
          {entries.map((content, i) => (
            <EntryTypeSwitcher content={content} key={`about-type-${i}`} />
          ))}
        </div>
      </div>
    );
  }

  return null;
};

export default Container;
