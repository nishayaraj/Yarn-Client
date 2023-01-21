import React, { useEffect, useState, useCallback } from 'react';
import AddJournalLink from '../../components/AddJournalLink';
import PageTitle from '../../components/PageTitle';
import JournalCard from '../../components/JournalCard';
import { getMyJournals } from '../../api/myJournalData';
import { useAuth } from '../../auth/context/authContext';

function MyJournals() {
  const { user: { id } } = useAuth();
  const [journals, setJournals] = useState([]);

  const getAllMyJournals = useCallback(() => {
    if (id) {
      getMyJournals(id).then(setJournals);
    }
  }, [id]);

  useEffect(() => {
    getAllMyJournals();
  }, [getAllMyJournals]);

  const mostRecentJournalByDate = journals.sort((a, b) => b.date.split('-').join('') - a.date.split('-').join(''));

  const renderJournal = () => mostRecentJournalByDate.map((journal) => (
    <JournalCard
      key={journal.id}
      journalObj={journal}
      onUpdate={getAllMyJournals}
    />
  ));

  return (
    <div className="text-center my-4">
      <PageTitle title="My journals">
        <AddJournalLink />
      </PageTitle>
      <div
        className="d-flex flex-wrap"
        style={{ justifyContent: 'center' }}
      >
        {renderJournal()}
      </div>
    </div>
  );
}

export default MyJournals;
