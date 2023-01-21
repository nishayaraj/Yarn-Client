/* eslint-disable react/forbid-prop-types */
/* eslint-disable @next/next/no-img-element */
import React from 'react';
import PropTypes from 'prop-types';

function LoggedoutAllStoryCard({
  storyObj,
}) {
  const renderStoryJournalsList = (journals) => {
    let storyJournalsList = '';
    if (journals && journals.length > 0) {
      journals.forEach((element) => {
        storyJournalsList += `${element.journalType}, `;
      });
    }
    return storyJournalsList;
  };

  return (
    <div
      style={{
        margin: '0px 20px 20px',
        width: '320px',
        border: '1px solid lightgray',
        padding: '10px',
        borderRadius: '8px',
      }}
    >
      <div>
        <img
          src={storyObj.imageUrl}
          alt={storyObj.title}
          style={{
            height: '300px',
            width: '300px',
            objectFit: 'cover',
            borderRadius: '10px',
          }}
        />
      </div>
      <div
        style={{ fontSize: '16px', textAlign: 'left', paddingTop: '16px' }}
      >
        <div
          style={{ color: '#717171' }}
        >
          <b>{storyObj.title}</b>
        </div>
        <div
          style={{ marginTop: '6px', color: '#717171' }}
        >
          <span>Author : </span>
          <b>{storyObj.authorName}</b>
        </div>
        <div
          style={{ marginTop: '6px', color: '#717171' }}
        >
          <span>Genre : </span>
          <b>{renderStoryJournalsList(storyObj.journals)}</b>
        </div>
        <div
          style={{
            marginTop: '6px',
          }}
        >
          {storyObj.story}
        </div>
      </div>
    </div>
  );
}

LoggedoutAllStoryCard.propTypes = {
  storyObj: PropTypes.shape({
    firebaseKey: PropTypes.string,
    authorName: PropTypes.string,
    title: PropTypes.string,
    story: PropTypes.string,
    imageUrl: PropTypes.string,
    journals: PropTypes.array,
    likes: PropTypes.number,
  }).isRequired,
};

export default LoggedoutAllStoryCard;
