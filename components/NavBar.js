/* eslint-disable @next/next/no-img-element */
import React from 'react';
import Link from 'next/link';
import {
  Navbar, Container, Nav,
} from 'react-bootstrap';
import { useRouter } from 'next/router';
import { signOut } from '../auth/auth';
import { useAuth } from '../auth/context/authContext';

export default function NavBar() {
  const router = useRouter();
  const { user } = useAuth();

  const handleSignoutClick = () => {
    router.replace('/');
    signOut();
  };

  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      bg="light"
      variant="light"
      fixed="top"
      style={{ boxShadow: '0 2px 4px -1px rgb(57 76 96 / 15%)' }}
    >
      <Container>
        <Link passHref href="/">
          <Navbar.Brand>
            <img
              src="/YMNavLogo.png"
              alt="YM"
              className="nav-app-logo"
            />
            Yarn Momento
          </Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse
          style={{ justifyContent: 'right' }}
        >
          <Nav>
            <Link
              passHref
              href="/my-journal"
            >
              <Nav.Link
                className="loggedin-navbar-button"
              >
                My Journals
              </Nav.Link>
            </Link>
            <Link
              passHref
              href="/my-stories"
            >
              <Nav.Link
                className="loggedin-navbar-button"
              >
                My Stories
              </Nav.Link>
            </Link>
            <Link passHref href="/all-stories">
              <Nav.Link
                className="loggedin-navbar-button"
              >
                All Stories
              </Nav.Link>
            </Link>
            <button
              type="button"
              className="loggedin-nav-button"
              onClick={handleSignoutClick}
            >
              <img
                className="loggedin-nav-button-user-avatar"
                src={user.photoURL}
                alt={user.displayName}
                referrerPolicy="no-referrer"
              />
              Sign out
            </button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
