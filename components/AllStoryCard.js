/* eslint-disable @next/next/no-img-element */
import React from 'react';
import PropTypes from 'prop-types';
import { useRouter } from 'next/router';
// import { deleteStory } from '../api/storiesData';
import LikeComponent from './LikeComponent';

function AllStoryCard({
  storyObj, userId, isUserLikedStory, updateStoryLikes,
}) {
  const router = useRouter();

  const deleteThisStory = () => {
    if (window.confirm(`Delete ${storyObj.title}?`)) {
      // deleteStory(storyObj.id).then(() => onDelete());
    }
  };

  const editStory = () => router.push(`/my-stories/edit/${storyObj.firebaseKey}`);

  const viewStory = () => router.push(`/my-stories/${storyObj.firebaseKey}`);

  const shortStory = storyObj.story.substring(0, 150);

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
        <div
          style={{
            marginTop: '10px',
          }}
        >
          <LikeComponent
            userLiked={isUserLikedStory}
            counter={storyObj.likes || 0}
            updateLikeCounter={(like) => updateStoryLikes(storyObj, like)}
          />
        </div>
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
          <b>{storyObj.journalType}</b>
        </div>
        <div
          style={{ marginTop: '6px' }}
        >
          {shortStory}<b>...</b>
        </div>
        <div
          style={{
            margin: '10px 0px',
            color: '#717171',
            display: 'flex',
            justifyContent: 'start',
          }}
        >
          <button
            type="button"
            style={{
              display: 'flex',
              padding: '6px',
              border: '1.5px solid lightgray',
              borderRadius: '8px',
              alignItems: 'center',
              width: '90px',
              cursor: 'pointer',
              fontWeight: 'bold',
              marginRight: '8px',
              background: 'none',
            }}
            onClick={viewStory}
          >
            <img
              src="/view.png"
              alt="View journal"
              style={{
                height: '24px',
                marginRight: '4px',
              }}
            />
            Read
          </button>
          {
            userId === storyObj.uid && (
              <button
                type="button"
                style={{
                  display: 'flex',
                  padding: '6px',
                  border: '1.5px solid lightgray',
                  borderRadius: '8px',
                  alignItems: 'center',
                  width: '90px',
                  cursor: 'pointer',
                  fontWeight: 'bold',
                  marginRight: '8px',
                  background: 'none',
                }}
                onClick={editStory}
              >
                <img
                  src="/edit.png"
                  alt="Edit journal"
                  style={{
                    height: '24px',
                    marginRight: '4px',
                  }}
                />
                Edit
              </button>
            )
}
          {userId === storyObj.uid && (
          <button
            type="button"
            style={{
              display: 'flex',
              padding: '6px',
              border: '1.5px solid lightgray',
              borderRadius: '8px',
              alignItems: 'center',
              width: '90px',
              cursor: 'pointer',
              fontWeight: 'bold',
              background: 'none',
            }}
            onClick={deleteThisStory}
          >
            <img
              src="/delete.png"
              alt="Delete journal"
              style={{
                height: '24px',
                marginRight: '4px',
              }}
            />
            Delete
          </button>
          )}
        </div>
      </div>
    </div>
  );
}

AllStoryCard.propTypes = {
  storyObj: PropTypes.shape({
    authorName: PropTypes.string,
    title: PropTypes.string,
    story: PropTypes.string,
    public: PropTypes.bool,
    date: PropTypes.string,
    imageUrl: PropTypes.string,
    journalType: PropTypes.string,
    journalId: PropTypes.string,
    isPublished: PropTypes.bool,
    firebaseKey: PropTypes.string,
    uid: PropTypes.string,
    likes: PropTypes.number,
  }).isRequired,
  userId: PropTypes.string.isRequired,
  isUserLikedStory: PropTypes.bool,
  // onDelete: PropTypes.func.isRequired,
  updateStoryLikes: PropTypes.func.isRequired,
};

AllStoryCard.defaultProps = {
  isUserLikedStory: false,
};

export default AllStoryCard;
