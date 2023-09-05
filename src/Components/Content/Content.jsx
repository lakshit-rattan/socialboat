import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { API } from '../../config/api';
import SingleContent from '../SingleContent/SingleContent';

const Content = (props) => {
  const [content, setContent] = useState([]);
  const query = props.name;

  const fetchAPI = async () => {
    try {
      const { data } = await axios.get(API(query, 6));
      setContent(data.results);
    } catch {
      console.log('API Error');
    }
  };

  useEffect(() => {
    if (query) fetchAPI();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query]);

  return (
    <>
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'space-evenly',
          alignItems: 'flex-start',
        }}
      >
        {content &&
          content.map((c) => (
            <SingleContent title={c.heading} tags={c.tags} video={c.video} />
          ))}
      </div>
    </>
  );
};

export default Content;
