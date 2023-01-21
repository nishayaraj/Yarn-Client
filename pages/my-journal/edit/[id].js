import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import JournalForm from '../../../components/forms/JournalForm';
import { getSingleJournal } from '../../../api';

export default function EditJournal() {
  const [journal, setJournal] = useState({});
  const router = useRouter();

  const { id } = router.query;

  useEffect(() => {
    getSingleJournal(id).then((setJournal));
  }, [id]);

  return (<JournalForm journalDataObj={journal} />);
}
