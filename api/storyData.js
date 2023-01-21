import { clientCredentials } from '../utils/client';

const getMyStories = (userId) => fetch(`${clientCredentials.apiUrl}/mystories?userId=${userId}`)
  .then((response) => response.json())
  .catch((error) => {
    console.error('Error:', error);
  });

const getAllPublicPublishedStories = () => fetch(`${clientCredentials.apiUrl}/mystories`)
  .then((response) => response.json())
  .catch((error) => {
    console.error('Error:', error);
  });

const getMyStoriesByJournal = (journalId) => fetch(`${clientCredentials.apiUrl}/mystories?journalId=${journalId}`)
  .then((response) => response.json())
  .catch((error) => {
    console.error('Error:', error);
  });

const getSingleStory = (storyId) => fetch(`${clientCredentials.apiUrl}/mystories/${storyId}`)
  .then((response) => response.json());

const updateStory = (story) => fetch(`${clientCredentials.apiUrl}/mystories/${story.id}`, {
  method: 'PUT',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(story),
})
  .then((response) => response.json())
  .catch((error) => {
    console.error('Error:', error);
  });

const createStory = (story) => fetch(`${clientCredentials.apiUrl}/mystories`, {
  method: 'POST',
  body: JSON.stringify(story),
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
})
  .then((resp) => resp.json())
  .catch((error) => {
    console.error('Error:', error);
  });

const deleteStory = (storyId) => fetch(`http://localhost:8000/mystories/${storyId}`, {
  method: 'DELETE',
});

export {
  getMyStories,
  getAllPublicPublishedStories,
  getSingleStory,
  updateStory,
  createStory,
  deleteStory,
  getMyStoriesByJournal,
};
