import { clientCredentials } from '../utils/client';

const getMyJournals = (userId) => fetch(`${clientCredentials.apiUrl}/myjournals?userId=${userId}`)
  .then((response) => response.json())
  .catch((error) => {
    console.error('Error:', error);
  });

const getSingleJournal = (journalId) => fetch(`${clientCredentials.apiUrl}/myjournals/${journalId}`)
  .then((response) => response.json());

const updateJournal = (journal) => fetch(`${clientCredentials.apiUrl}/myjournals/${journal.id}`, {
  method: 'PUT',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(journal),
})
  .then((response) => response.json())
  .catch((error) => {
    console.error('Error:', error);
  });

const createJournal = (journal) => fetch(`${clientCredentials.apiUrl}/myjournals`, {
  method: 'POST',
  body: JSON.stringify(journal),
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
})
  .then((resp) => resp.json())
  .catch((error) => {
    console.error('Error:', error);
  });

const deleteJournal = (journalId) => fetch(`http://localhost:8000/myjournals/${journalId}`, {
  method: 'DELETE',
});

export {
  getMyJournals,
  getSingleJournal,
  updateJournal,
  createJournal,
  deleteJournal,
};
