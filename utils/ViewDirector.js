import PropTypes from 'prop-types';
import { useAuth } from '../auth/context/authContext';
import Loading from '../components/Loading';
import Signin from '../components/Signin';
import NavBar from '../components/NavBar';
import RegisterForm from '../components/RegisterForm';

const ViewDirectorBasedOnUserAuthStatus = ({ component: Component, pageProps }) => {
  const { user, userLoading, updateUser } = useAuth();

  // if user state is null, then show loader
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

  // udpate this handle anonymous user
  return <Signin />;
};

export default ViewDirectorBasedOnUserAuthStatus;

ViewDirectorBasedOnUserAuthStatus.propTypes = {
  component: PropTypes.func.isRequired,
  pageProps: PropTypes.oneOfType([PropTypes.object]).isRequired,
};
