/* eslint-disable react/prop-types */
import 'bootstrap/dist/css/bootstrap.min.css';
import Head from 'next/head';
import '../styles/globals.css';
import { AuthProvider } from '../auth/context/authContext';
import ViewDirectorBasedOnUserAuthStatus from '../utils/ViewDirector';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Yarn Momento</title>
        <link rel="icon" href="/favicon-32x32.png" />
      </Head>
      <AuthProvider>
        {/* gives children components access to user and auth methods */}
        <ViewDirectorBasedOnUserAuthStatus
          // if status is pending === loading
          // if status is logged in === view app
          // if status is logged out === sign in page
          component={Component}
          pageProps={pageProps}
        />
      </AuthProvider>
    </>
  );
}

export default MyApp;
