import { Chip } from '@material-ui/core';
import React from 'react';
import './SingleContent.css';

const SingleContent = ({ title, tags, video }) => {
  return (
    <div className="media">
      <b className="title">{title}</b>
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'start',
          padding: '6px 0',
          marginBottom: '5px',
        }}
      >
        {tags.map((tag) => (
          <Chip
            label={tag}
            style={{ margin: 3, color: '#ffffff' }}
            clickable
            variant="outlined"
            color="primary"
            size="small"
          />
        ))}
      </div>
      <video src={`${video}`} className="video" controls>
        {/* The text between the <video> and </video> tags will only be displayed in browsers that do not support the <video> element. */}
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default SingleContent;
