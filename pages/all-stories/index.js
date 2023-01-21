// /* eslint-disable @next/next/no-img-element */
// import React, { useEffect, useState } from 'react';
// import PageTitle from '../../components/PageTitle';
// import { useAuth } from '../../auth/context/authContext';
// // import { getAllPublicStories, updateUserStoryLike, getUserProfileData } from '../../api';
// import AllStoryCard from '../../components/AllStoryCard';

// function AllStories() {
//   const { user: { uid } } = useAuth();
//   const [stories, setStories] = useState([]);
//   const [userData, setUserData] = useState({});

//   useEffect(() => {
//     // getAllPublicStories()
//       // .then(setStories);
//   }, []);

//   useEffect(() => {
//     if (uid) {
//       // getUserProfileData(uid)
//       //   .then((data) => {
//       //     setUserData(data);
//       //   });
//     }
//   }, [uid]);

//   // const onDeleteStory = () => getAllPublicStories().then(setStories);

//   const makeUserProfileLikeObj = (storyFirebaseKey, like) => {
//     let userLikedStories = userData?.likedStories;

//     if (userLikedStories) {
//       if (like === true && !(userLikedStories.includes(storyFirebaseKey))) {
//         userLikedStories = [...userLikedStories, storyFirebaseKey];
//       } else if (like === false && userLikedStories.includes(storyFirebaseKey)) {
//         const index = userLikedStories.indexOf(storyFirebaseKey);
//         if (index > -1) {
//           userLikedStories.splice(index, 1);
//         }
//       }
//     } else if (like === true) {
//       userLikedStories = [storyFirebaseKey];
//     }
//     return { ...userData, likedStories: userLikedStories };
//   };

//   const updateStoryLikes = (storyObj, like) => {
//     let updatedStoryObj = { ...storyObj };
//     const updateUserObj = makeUserProfileLikeObj(storyObj.firebaseKey, like);
//     if (like) {
//       updatedStoryObj = { ...updatedStoryObj, likes: (storyObj.likes || 0) + 1 };
//     } else {
//       const currentLike = storyObj.likes || 0;
//       updatedStoryObj = { ...updatedStoryObj, likes: (currentLike > 0) ? currentLike - 1 : 0 };
//     }
//     // updateUserStoryLike(updatedStoryObj, updateUserObj);
//   };

//   const renderStories = () => ((stories && stories.length > 0)
//     ? stories.map((story) => {
//       const userLikedStories = userData?.likedStories || [];
//       const isUserLikedStory = userLikedStories.includes(story.firebaseKey);

//       return (
//         <AllStoryCard
//           key={story.firebaseKey}
//           storyObj={story}
//           onDelete={onDeleteStory}
//           userId={uid}
//           isUserLikedStory={isUserLikedStory}
//           updateStoryLikes={updateStoryLikes}
//         />
//       );
//     }) : 'No Public Story');

//   return (
//     <div>
//       <PageTitle title="All Stories" />
//       <div
//         style={{
//           display: 'flex',
//           margin: '30px',
//           flexWrap: 'wrap',
//           flexDirection: 'row',
//         }}
//       >
//         {renderStories()}
//       </div>
//     </div>
//   );
// }

// export default AllStories;
