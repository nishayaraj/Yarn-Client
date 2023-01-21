import React, { useEffect, useState, useCallback } from 'react';
import { useAuth } from '../../auth/context/authContext';
import PageTitle from '../../components/PageTitle';
import MyStoryCard from '../../components/MyStoryCard';
import { getMyStories } from '../../api';
import AddStoryLink from '../../components/AddStoryLink';

function MyStories() {
  const { user } = useAuth();
  const [stories, setStories] = useState([]);

  const getAllTheStories = useCallback(() => {
    getMyStories(user.id).then(setStories);
  }, [user]);

  useEffect(() => {
    getAllTheStories();
  }, [getAllTheStories, user]);

  return (
    <div className="text-center my-4">
      <PageTitle title="My Stories">
        <AddStoryLink />
      </PageTitle>
      <div className="d-flex flex-wrap">
        {stories.map((story) => (
          <MyStoryCard
            key={story.id}
            storyObj={story}
            onUpdate={getAllTheStories}
          />
        ))}
      </div>
    </div>
  );
}

export default MyStories;
