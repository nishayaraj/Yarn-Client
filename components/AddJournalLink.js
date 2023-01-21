/* eslint-disable @next/next/no-img-element */
import React from 'react';
import { useRouter } from 'next/router';

function AddJournalLink() {
  const router = useRouter();
  const routeToNewJournalPage = () => router.push('/my-journal/new');

  return (
    <button
      type="button"
      onClick={routeToNewJournalPage}
      className="addButton"
    >
      <img
        src="/addJournal.png"
        alt="Add new journal"
        style={{
          height: '25px',
          objectFit: 'contain',
          marginRight: '6px',
        }}
      />
      <span
        style={{
          fontSize: '14px',
        }}
      >
        Add Journal
      </span>
    </button>
  );
}

export default AddJournalLink;
