import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import StoryForm from '../../../components/forms/StoryForm';
import { getSingleStory } from '../../../api';

export default function EditStory() {
  const [story, setStory] = useState({});
  const router = useRouter();

  const { id } = router.query;

  useEffect(() => {
    getSingleStory(id).then(setStory);
  }, [id]);

  return (<StoryForm storyObj={story} />);
}
