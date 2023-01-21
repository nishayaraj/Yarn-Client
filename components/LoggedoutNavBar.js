// /* eslint-disable @next/next/no-img-element */
// import React, { useState } from 'react';
// import Link from 'next/link';
// import {
//   Navbar, Container, Form,
// } from 'react-bootstrap';
// import PropTypes from 'prop-types';
// import { signIn } from '../utils/auth';

// export default function LoggedOutNavBar({ getSearchTerm, inSearchFocus }) {
//   const [searchTerm, setSearchTerm] = useState('');
//   const searchHandler = (e) => {
//     e.preventDefault();
//     getSearchTerm(e.target[0].value);
//   };

//   const onChangeHandler = (e) => {
//     setSearchTerm(e.target.value);
//     getSearchTerm(e.target.value);
//   };

//   return (
//     <Navbar
//       collapseOnSelect
//       expand="lg"
//       bg="light"
//       variant="light"
//       fixed="top"
//       style={{ boxShadow: '0 2px 4px -1px rgb(57 76 96 / 15%)' }}
//     >
//       <Container>
//         <div>
//           <img
//             src="/YMNavLogo.png"
//             alt="YM"
//             className="nav-app-logo"
//           />
//         </div>
//         <Link passHref href="/">
//           <Navbar.Brand>Yarn Momento</Navbar.Brand>
//         </Link>
//         <Navbar.Toggle aria-controls="responsive-loggedout-navbar-nav" />
//         <Navbar.Collapse id="responsive-loggedout-navbar-nav" style={{ justifyContent: 'right' }}>
//           <div>
//             <Form
//               className="d-flex logoutNavItem-search"
//               onSubmit={searchHandler}
//             >
//               <Form.Control
//                 type="search"
//                 value={searchTerm}
//                 placeholder="Story title"
//                 aria-label="Story title search"
//                 onChange={onChangeHandler}
//                 onFocus={inSearchFocus}
//                 className="loggedout-nav-search-input"
//               />
//               <button
//                 type="submit"
//                 // variant="outline-success"
//                 style={{
//                   color: 'black',
//                   border: 'none',
//                   background: 'white',
//                   fontSize: '14px',
//                 }}
//               >
//                 Search
//               </button>
//             </Form>
//           </div>
//           <div
//             className="logoutNavItem-loginbutton"
//           >
//             <button
//               type="button"
//               className="loggedout-nav-button"
//               onClick={signIn}
//             >
//               <img
//                 className="loggedout-nav-button-icon"
//                 src="/loginBook.gif"
//                 alt="login"
//               />
//               Sign in
//             </button>
//           </div>
//         </Navbar.Collapse>
//       </Container>
//     </Navbar>
//   );
// }

// LoggedOutNavBar.propTypes = {
//   getSearchTerm: PropTypes.func.isRequired,
//   inSearchFocus: PropTypes.func.isRequired,
// };
