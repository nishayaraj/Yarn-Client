/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from 'react';
import PageTitle from '../../components/PageTitle';
import { useAuth } from '../../auth/context/authContext';
import { getAllPublicPublishedStories } from '../../api';
import AllStoryCard from '../../components/AllStoryCard';

function AllStories() {
  const { user: { id } } = useAuth();
  const [stories, setStories] = useState([]);

  const getAllStories = () => getAllPublicPublishedStories().then(setStories);

  useEffect(() => {
    getAllStories();
  }, []);

  const renderStories = () => ((stories && stories.length > 0)
    ? stories.map((story) => (
      <AllStoryCard
        key={story.id}
        storyObj={story}
        onDelete={getAllStories}
        userId={id}
      />
    )) : 'No Public Story');

  return (
    <div>
      <PageTitle title="All Stories" />
      <div
        style={{
          display: 'flex',
          margin: '30px',
          flexWrap: 'wrap',
          flexDirection: 'row',
        }}
      >
        {renderStories()}
      </div>
    </div>
  );
}

export default AllStories;
