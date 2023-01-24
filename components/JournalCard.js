/* eslint-disable @next/next/no-img-element */
import React from 'react';
import PropTypes from 'prop-types';
import { useRouter } from 'next/router';
import { deleteJournal } from '../api';

function JournalCard({ journalObj, onUpdate }) {
  const router = useRouter();

  const deleteThisJournal = () => {
    if (window.confirm(`Delete ${journalObj.journalType}?`)) {
      deleteJournal(journalObj.id).then(() => onUpdate());
    }
  };

  const editJournal = () => router.push(`/my-journal/edit/${journalObj.id}`);

  const viewJournal = () => router.push(`/my-journal/${journalObj.id}`);
  console.warn(journalObj.id);

  return (
    <div
      style={{
        margin: '0px 16px 16px',
        border: '1px solid lightgray',
        padding: '10px',
        borderRadius: '8px',
      }}
    >
      <div>
        <img
          src={journalObj.imageUrl}
          alt={journalObj.journalType}
          style={{
            height: '300px',
            width: '300px',
            objectFit: 'cover',
            borderRadius: '10px',
          }}
        />
      </div>
      <div
        style={{ fontSize: '16px', textAlign: 'left' }}
      >
        <div
          style={{ fontWeight: 'bold', marginTop: '16px' }}
        >
          {journalObj.journalType}
        </div>
        <div
          style={{ marginTop: '6px' }}
        >
          <span>Created On : </span>{journalObj.date}
        </div>
        <div
          style={{
            margin: '10px 0px',
            color: '#717171',
            display: 'flex',
            justifyContent: 'space-around',
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
              background: 'none',
            }}
            onClick={viewJournal}
          >
            <img
              src="/view.png"
              alt="View journal"
              style={{
                height: '24px',
                marginRight: '4px',
              }}
            />
            View
          </button>
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
            onClick={editJournal}
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
            onClick={deleteThisJournal}
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
        </div>
      </div>
    </div>
  );
}

JournalCard.propTypes = {
  journalObj: PropTypes.shape({
    imageUrl: PropTypes.string,
    journalType: PropTypes.string,
    date: PropTypes.string,
    id: PropTypes.number,
  }).isRequired,
  onUpdate: PropTypes.func.isRequired,
};

export default JournalCard;
