import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import PropTypes from 'prop-types';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { Button } from 'react-bootstrap';
import PageTitle from '../PageTitle';
import { useAuth } from '../../auth/context/authContext';
import { createJournal, updateJournal } from '../../api';

const initialState = {
  journalType: '',
  imageUrl: '',
  date: '',
};

function JournalForm({ journalDataObj }) {
  const router = useRouter();
  const { user } = useAuth();
  const [journalFormInput, setJournalFormInput] = useState(initialState);

  useEffect(() => {
    if (journalDataObj.id) setJournalFormInput(journalDataObj);
  }, [journalDataObj, user]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setJournalFormInput((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (journalDataObj.id) {
      updateJournal({ ...journalFormInput, userId: user.id })
        .then(() => router.push('/my-journal'));
    } else {
      const payload = { ...journalFormInput, userId: user.id };
      createJournal(payload).then((journal) => router.push(`/my-journal/${journal.id}`));
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
      <PageTitle title={`${journalDataObj.id ? `Update : ${journalDataObj.journalType}` : 'Create Journal'}`} />
      <FloatingLabel
        controlId="floatingInput1"
        label="Journal Type"
        className="mb-3"
        style={{ marginTop: '18px' }}
      >
        <Form.Control
          type="text"
          placeholder="Enter Journal Name"
          name="journalType"
          value={journalFormInput.journalType}
          onChange={handleChange}
          required
        />
        <div
          style={{
            marginTop: '6px',
            fontSize: '14px',
          }}
        >
          Journal & stories from journal named &quot;personal&quot; will be private to the user
        </div>
      </FloatingLabel>

      <FloatingLabel
        controlId="floatingInput2"
        label="Journal Image"
        className="mb-3"
        style={{ marginTop: '25px' }}
      >
        <Form.Control
          type="imageUrl"
          placeholder="Enter an image url"
          name="imageUrl"
          value={journalFormInput.imageUrl}
          onChange={handleChange}
          required
        />
      </FloatingLabel>

      <FloatingLabel
        controlId="floatingInput2"
        label="Date"
        className="mb-3"
        style={{ marginTop: '25px' }}
      >
        <Form.Control
          type="date"
          placeholder="Enter the Date"
          name="date"
          value={journalFormInput.date}
          onChange={handleChange}
          required
        />
      </FloatingLabel>

      <Button
        type="submit"
        style={{
          marginTop: '25px',
          background: '#f38449',
          border: '1px solid #f38449',
        }}
      >
        {journalDataObj.id ? 'Update' : 'Create'} Journal
      </Button>
    </Form>

  );
}

JournalForm.propTypes = {
  journalDataObj: PropTypes.shape({
    id: PropTypes.number,
    journalType: PropTypes.string,
    imageUrl: PropTypes.string,
    date: PropTypes.string,
  }),
};

JournalForm.defaultProps = {
  journalDataObj: initialState,
};

export default JournalForm;
