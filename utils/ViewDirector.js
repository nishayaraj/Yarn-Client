import PropTypes from 'prop-types';
import { useAuth } from '../auth/context/authContext';
import Loading from '../components/Loading';
import NavBar from '../components/NavBar';
import RegisterForm from '../components/RegisterForm';
import LoggedoutAllStories from '../components/LoggedoutAllStories';

const ViewDirectorBasedOnUserAuthStatus = ({ component: Component, pageProps }) => {
  const {
    user, userLoading, updateUser,
  } = useAuth();

  if (userLoading) {
    return <Loading />;
  }

  if (user) {
    return (
      <>
        <NavBar />
        <div className="container page-container">
          {'valid' in user ? <RegisterForm user={user} updateUser={updateUser} /> : <Component {...pageProps} />}
        </div>
      </>
    );
  }
  return (
    <div className="container page-container">
      <LoggedoutAllStories />
    </div>
  );
};

export default ViewDirectorBasedOnUserAuthStatus;

ViewDirectorBasedOnUserAuthStatus.propTypes = {
  component: PropTypes.func.isRequired,
  pageProps: PropTypes.oneOfType([PropTypes.object]).isRequired,
};
