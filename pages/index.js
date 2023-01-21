/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { useAuth } from '../auth/context/authContext';

function Home() {
  const { user } = useAuth();
  const [totalStories] = useState(0);
  const [totalJournals] = useState(0);
  const router = useRouter();

  const routeToNewJournalPage = () => router.push('/my-journal/new');

  const routeToNewStoryPage = () => router.push('./my-stories/new');

  const [greetings, setGreetings] = useState({
    hourGreetings: 'Good morning',
  });

  // const fetchMyStoriesData = useCallback(() => {
  //   getMyStories(user.uid).then((stories) => {
  //     if (stories?.length > 0) {
  //       setTotalStories(stories.length);
  //     }
  //   });
  // }, [user]);

  // useEffect(() => {
  //   fetchMyStoriesData();
  // }, [fetchMyStoriesData, user]);

  // const fetchMyJournalsData = useCallback(() => {
  //   getMyJournals(user.uid).then((journals) => {
  //     if (journals?.length > 0) {
  //       setTotalJournals(journals.length);
  //     }
  //   });
  // }, [user]);

  // useEffect(() => {
  //   fetchMyJournalsData();
  // }, [fetchMyJournalsData, user]);

  useEffect(() => {
    const currHour = new Date().getHours();
    let hourGreetings = 'Good evening';
    if (currHour < 12) {
      hourGreetings = 'Good morning';
    } else if (currHour < 18) {
      hourGreetings = 'Good afternoon';
    }

    setGreetings({ ...greetings, hourGreetings });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div
      style={{
        backgroundImage: 'url("/pexels-eva-bronzini.jpg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'end',
        color: 'white',
        flexDirection: 'column',
        marginTop: '-68px',
      }}
    >
      <img
        style={{
          borderRadius: '100px',
          objectFit: 'fill',
          border: '3px solid white',
        }}
        src={user.fbUser.photoURL}
        alt={`Hello ${user.fbUser.displayName}`}
        referrerPolicy="no-referrer"
      />
      <div
        style={{
          fontSize: '32px',
          marginTop: '20px',
        }}
      >
        {greetings.hourGreetings}, {user.fbUser.displayName}
      </div>
      <div
        style={{
          fontSize: '21px',
          marginTop: '12px',
        }}
      >
        You have {totalStories} {totalStories === 1 ? 'story' : 'stories' } & {totalJournals} {totalJournals <= 1 ? 'journal' : 'journals' }
      </div>
      <div
        style={{
          margin: '32px 0px 50px',
          display: 'flex',
        }}
      >
        <button
          type="button"
          onClick={routeToNewJournalPage}
          style={{
            display: 'flex',
            padding: '10px 15px',
            alignItems: 'center',
            backgroundColor: '#fff',
            border: '1px solid',
            borderColor: '#dadce0',
            borderRadius: '100px',
            justifyContent: 'center',
          }}
        >
          <img
            src="/addJournal.png"
            alt="Add journal"
            style={{
              height: '28px',
              marginRight: '6px',
            }}
          />
          Add New Journal
        </button>
        <button
          type="button"
          onClick={routeToNewStoryPage}
          style={{
            display: 'flex',
            padding: '10px 15px',
            alignItems: 'center',
            backgroundColor: '#fff',
            border: '1px solid',
            borderColor: '#dadce0',
            borderRadius: '100px',
            justifyContent: 'center',
            marginLeft: '20px',
          }}
        >
          <img
            src="/addStory.png"
            alt="Add story"
            style={{
              height: '28px',
              marginRight: '6px',
            }}
          />
          Add New Story
        </button>
      </div>
    </div>
  );
}

export default Home;
