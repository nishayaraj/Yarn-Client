import { clientCredentials } from '../utils/client';

// done
const getMyStories = (userId) => fetch(`${clientCredentials.apiUrl}/mystories?userId=${userId}`)
  .then((response) => response.json())
  .catch((error) => {
    console.error('Error:', error);
  });

// done
const getMyStoriesByJournal = (journalId) => fetch(`${clientCredentials.apiUrl}/mystories?journalId=${journalId}`)
  .then((response) => response.json())
  .catch((error) => {
    console.error('Error:', error);
  });

// done
const getSingleStory = (storyId) => fetch(`${clientCredentials.apiUrl}/mystories/${storyId}`)
  .then((response) => response.json());

// done
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

// done
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

// done
const deleteStory = (storyId) => fetch(`http://localhost:8000/mystories/${storyId}`, {
  method: 'DELETE',
});

export {
  getMyStories,
  getSingleStory,
  updateStory,
  createStory,
  deleteStory,
  getMyStoriesByJournal,
};
