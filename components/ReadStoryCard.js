/* eslint-disable react/forbid-prop-types */
/* eslint-disable @next/next/no-img-element */
import React from 'react';
import PropTypes from 'prop-types';
import LikeComponent from './LikeComponent';

function ReadStoryCard({ storyObj }) {
  return (
    <div
      style={{
        margin: '0px 20px 20px',
        paddingTop: '20px',
      }}
    >
      <div
        style={{
          display: 'flex',
        }}
      >
        <img
          src={storyObj.imageUrl}
          alt={storyObj.title}
          style={{
            height: '150px',
            width: '150px',
            objectFit: 'cover',
            borderRadius: '10px',
          }}
        />
        <div
          style={{
            marginLeft: '16px',
          }}
        >
          <div>
            <b>{storyObj.title}</b>
          </div>
          <div
            style={{ marginTop: '6px' }}
          >
            <span>Author : </span>
            <b>{storyObj.authorName}</b>
          </div>
          <div
            style={{ marginTop: '6px' }}
          >
            <span>Genre : </span>
            <b>{storyObj?.journals && storyObj.journals.join(', ')}</b>
          </div>
          <div
            style={{ marginTop: '6px', marginBottom: '6px' }}
          >
            {storyObj.date}
          </div>
          <LikeComponent disableLikeOption counter={storyObj.likes} />
        </div>
      </div>
      <div
        style={{ fontSize: '16px', textAlign: 'left', paddingTop: '16px' }}
      >
        <div
          style={{ marginTop: '6px' }}
        >
          {storyObj.story}
        </div>
      </div>
    </div>
  );
}

ReadStoryCard.propTypes = {
  storyObj: PropTypes.shape({
    authorName: PropTypes.string,
    title: PropTypes.string,
    story: PropTypes.string,
    imageUrl: PropTypes.string,
    journals: PropTypes.array,
    likes: PropTypes.number,
    date: PropTypes.string,
  }).isRequired,
};

export default ReadStoryCard;
