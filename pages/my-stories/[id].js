/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { getSingleStory } from '../../api';
import ReadStoryCard from '../../components/ReadStoryCard';

export default function ViewStoryCards() {
  const [storyDetails, setStoryDetails] = useState({});
  const router = useRouter();

  const { id } = router.query;

  useEffect(() => {
    getSingleStory(id).then(setStoryDetails);
  }, [id]);

  return (<ReadStoryCard storyObj={storyDetails} />);
}
