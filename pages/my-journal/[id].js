/* eslint-disable @next/next/no-img-element */
import React, { useCallback, useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { getJournalDetailsWithStory } from '../../api';
import PageTitle from '../../components/PageTitle';
import MyStoryCard from '../../components/MyStoryCard';
import AddStoryLink from '../../components/AddStoryLink';

export default function ViewJournal() {
  const router = useRouter();
  const { id } = router.query;

  const [journal, setJournal] = useState({});
  const [stories, setStories] = useState([]);

  const getJournalStoryDetails = useCallback(() => getJournalDetailsWithStory(id).then((data) => {
    setJournal(data.journalData);
    setStories(data.storyData);
  }), [id]);

  useEffect(() => {
    getJournalStoryDetails();
  }, [getJournalStoryDetails]);

  const renderStories = () => ((stories && stories.length > 0)
    ? stories?.map((story) => (
      <MyStoryCard
        key={story.id}
        storyObj={story}
        onUpdate={getJournalStoryDetails}
      />
    )) : 'no stories found');

  return (
    <div className="text-center my-4">
      <PageTitle title={`Journal : ${journal?.journalType}`}>
        <AddStoryLink journalId={journal?.id} journalType={journal?.journalType} />
      </PageTitle>
      <div className="d-flex flex-wrap">
        {renderStories()}
      </div>
    </div>
  );
}
