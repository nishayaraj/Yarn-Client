/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react/forbid-prop-types */
import React, { useEffect, useState, useRef } from 'react';
import { useRouter } from 'next/router';
import PropTypes from 'prop-types';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { Button } from 'react-bootstrap';
import Multiselect from 'multiselect-react-dropdown';
import AddJournalLink from '../AddJournalLink';
import { useAuth } from '../../auth/context/authContext';
import PageTitle from '../PageTitle';
import { getMyJournals, updateStory, createStory } from '../../api';

const initialState = {
  id: '',
  title: '',
  authorName: '',
  story: '',
  date: '',
  imageUrl: '',
  journalId: 0,
  journals: [''],
  public: false,
  isPublished: false,
};

function StoryForm({ storyObj }) {
  const router = useRouter();
  const { user } = useAuth();
  const [storyFormInput, setStoryFormInput] = useState(initialState);
  const [journalsList, setJournalsList] = useState([]);
  const [selectedJournals, setSelectedJournals] = useState([]);
  const journalMultiSelectRef = useRef();

  useEffect(() => {
    if (storyObj?.id) {
      setStoryFormInput({ ...initialState, ...(storyObj || {}) });
      setSelectedJournals(storyObj.journals);
    }
  }, [storyObj]);

  useEffect(() => {
    getMyJournals(user.id).then((journalsData) => {
      setJournalsList(journalsData);
    });
  }, [user]);

  // Handle Mutli select journals
  const updateJournalSelected = (selectedJournalData) => {
    setSelectedJournals(selectedJournalData);

    selectedJournalData.forEach((journalData) => {
      if (journalData.journalType.toLowerCase().includes('personal')) {
        setStoryFormInput({
          ...storyFormInput, public: false,
        });
      }
    });
  };

  // handles form element change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setStoryFormInput({ ...storyFormInput, [name]: value });
  };

  // handles toggle button form element change
  const handleToggleChange = (e) => {
    const { name, checked = false } = e.target;

    if (name === 'public' && checked) {
      const selectedJournalsCopy = [...selectedJournals];
      const indexOfPersonlJournal = selectedJournalsCopy.findIndex((data) => data.journalType.toLowerCase().includes('personal'));

      if (indexOfPersonlJournal !== -1) {
        selectedJournalsCopy.splice(indexOfPersonlJournal, 1);
        setSelectedJournals(selectedJournalsCopy);
        journalMultiSelectRef.current.resetSelectedValues(selectedJournalsCopy);
      }
    }

    setStoryFormInput({
      ...storyFormInput, [name]: checked,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const journals = [];
    selectedJournals.forEach((journal) => !journals.includes(journal.id) && journals.push(journal.id));
    const payload = { ...storyFormInput, journals, userId: user.id };
    if (storyFormInput.id) {
      updateStory(payload).then(() => router.back());
    } else {
      createStory(payload).then(() => {
        router.back();
      });
    }
  };

  return (
    <Form
      onSubmit={handleSubmit}
      style={{
        color: 'black',
        lineHeight: '25px',
        padding: '30px 40px',
        border: '1px solid lightgray',
        borderRadius: '8px',
        marginBottom: '20px',
        background: 'white',
      }}
    >
      <PageTitle title={`${storyFormInput.id ? `Update : ${storyObj.title}` : 'Create story'}`} />
      <FloatingLabel
        controlId="floatingInput1"
        label="Story Title"
        className="mb-3"
        style={{ marginTop: '18px' }}
      >
        <Form.Control
          type="text"
          placeholder="Enter Story Title"
          name="title"
          value={storyFormInput.title}
          onChange={handleChange}
          required
        />
      </FloatingLabel>
      <FloatingLabel
        controlId="floatingInput2"
        label="Story"
        className="mb-3"
        style={{ marginTop: '25px' }}
      >
        <Form.Control
          as="textarea"
          rows={3}
          placeholder="Weave your Story here"
          maxLength={800}
          name="story"
          value={storyFormInput.story}
          onChange={handleChange}
          required
          style={{
            lineHeight: '25px',
            minHeight: '200px',
          }}
        />
        <div style={{ margin: '4px 0px 20px', fontSize: '14px' }}>Limit: {storyFormInput.story && `${storyFormInput.story.length}/800`}</div>
      </FloatingLabel>

      <FloatingLabel
        controlId="floatingInput2"
        label="Author Name"
        className="mb-3"
        style={{ marginTop: '25px' }}
      >
        <Form.Control
          type="text"
          placeholder="Author Name"
          name="authorName"
          value={storyFormInput.authorName}
          onChange={handleChange}
          required
        />
      </FloatingLabel>

      <FloatingLabel
        controlId="floatingInput2"
        label="Story Image"
        className="mb-3"
        style={{ marginTop: '25px' }}
      >
        <Form.Control
          type="imageUrl"
          placeholder="Enter an image url"
          name="imageUrl"
          value={storyFormInput.imageUrl}
          onChange={handleChange}
          required
        />
      </FloatingLabel>
      <Multiselect
        options={journalsList}
        selectedValues={selectedJournals}
        onSelect={updateJournalSelected}
        onRemove={updateJournalSelected}
        displayValue="journalType"
        placeholder="Select Journals"
        hidePlaceholder
        ref={journalMultiSelectRef}
      />
      <div style={{ marginTop: '8px' }}><AddJournalLink /> </div>
      <FloatingLabel
        controlId="floatingInput2"
        label="Date"
        className="mb-3"
        style={{ marginTop: '25px' }}
      >
        <Form.Control
          type="date"
          placeholder="Date"
          name="date"
          value={storyFormInput.date}
          onChange={handleChange}
          required
        />
      </FloatingLabel>

      <Form.Check
        className="text-black mb-3"
        type="switch"
        name="public"
        id="public"
        label="Is this a public story ?"
        checked={storyFormInput.public}
        onChange={handleToggleChange}
        style={{ marginTop: '25px' }}
      />

      <Form.Check
        className="text-black mb-3"
        type="switch"
        id="isPublished"
        name="isPublished"
        label="Is Published ?"
        checked={storyFormInput.isPublished}
        onChange={handleToggleChange}
        style={{ marginTop: '25px' }}
      />

      <Button
        type="submit"
        style={{
          marginTop: '25px',
          background: '#f38449',
          border: '1px solid #f38449',
        }}
      >
        {storyFormInput.id ? 'Update' : 'Create'} Story
      </Button>
    </Form>
  );
}

StoryForm.propTypes = {
  storyObj: PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string,
    authorName: PropTypes.string,
    journals: PropTypes.array,
    story: PropTypes.string,
    imageUrl: PropTypes.string,
    date: PropTypes.string,
    isPublished: PropTypes.bool,
    public: PropTypes.bool,
  }),
};

StoryForm.defaultProps = {
  storyObj: initialState,
};

export default StoryForm;
