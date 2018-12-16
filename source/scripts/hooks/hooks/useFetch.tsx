import React from 'react';

async function request(url: string, body: string) {
  const headers = {
    Accept: 'application/json',
    Authorization:
      'Bearer BQYPEWtU3JL3EZkztVZFxtiP-QvJIt_K_3vYtr7boQtvglGNwRRVX14oHSgYAjey',
    'Content-Type': 'application/json',
  };

  const response = await fetch(url, {
    method: 'POST',
    credentials: 'same-origin',
    body,
    headers,
  });

  const json = await response.json();

  return json;
}

function useFetch(url: string, body: string) {
  const [loading, setLoading] = React.useState(true);
  const [data, setData] = React.useState();
  const [error, setError] = React.useState(null);

  React.useEffect(() => {
    async function network() {
      const response = await request(url, body);
      setData(response);
    }

    setLoading(true);
    network();
    setLoading(false);
  }, [url]);

  return {
    success: data ? true : false,
    content: data,
  };
}

export default useFetch;
