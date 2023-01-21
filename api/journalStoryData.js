/* eslint-disable import/prefer-default-export */
import { getSingleJournal } from './myJournalData';
import { getMyStoriesByJournal } from './storyData';

// done
const getJournalDetailsWithStory = (journalId) => new Promise((resolve, reject) => {
  getSingleJournal(journalId)
    .then((journalData) => {
      getMyStoriesByJournal(journalId)
        .then((storyData) => {
          resolve({ journalData, storyData });
        });
    }).catch((error) => reject(error));
});

export {
  getJournalDetailsWithStory,
};
