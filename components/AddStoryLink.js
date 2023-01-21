/* eslint-disable @next/next/no-img-element */
import React from 'react';
import { useRouter } from 'next/router';
import PropTypes from 'prop-types';

function AddStoryLink({ journalId, journalType }) {
  const router = useRouter();
  const queryParam = journalId && journalType ? `?journalId=${journalId}&journalType=${journalType}` : '';
  const newStoryLink = `/my-stories/new/${queryParam}`;

  const routeToNewStoryPage = () => router.push(newStoryLink);

  return (
    <button
      type="button"
      onClick={routeToNewStoryPage}
      className="addButton"
    >
      <img
        src="/addStory.png"
        alt="Add new story"
        style={{
          height: '25px',
          objectFit: 'contain',
          marginRight: '6px',
        }}
      />
      <span
        style={{
          fontSize: '14px',
          marginTop: '4px',
        }}
      >
        Add Story
      </span>
    </button>
  );
}

AddStoryLink.propTypes = {
  journalId: PropTypes.string,
  journalType: PropTypes.string,
};

AddStoryLink.defaultProps = {
  journalId: undefined,
  journalType: undefined,
};

export default AddStoryLink;
