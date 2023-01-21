import React from 'react';
import { useRouter } from 'next/router';
import StoryForm from '../../../components/forms/StoryForm';

export default function AddStory() {
  const { journalId, journalType } = useRouter().query;

  return <StoryForm storyObj={{ journalId, journalType }} />;
}
