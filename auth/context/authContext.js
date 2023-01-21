// Context API Docs: https://beta.reactjs.org/learn/passing-data-deeply-with-context

import React, {
  createContext, //
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';
import { checkUser } from '../auth';
import { firebase } from '../../utils/client';

const AuthContext = createContext();

AuthContext.displayName = 'AuthContext'; // Context object accepts a displayName string property. React DevTools uses this string to determine what to display for the context. https://reactjs.org/docs/context.html#contextdisplayname

const AuthProvider = (props) => {
  const [user, setUser] = useState(null);
  const [oAuthUser, setOAuthUser] = useState(null);
  const [anonymousUser, setAnonymousUser] = useState(null);

  const updateUser = useMemo(
    () => (uid) => checkUser(uid).then((userInfo) => {
      setUser({ fbUser: oAuthUser, ...userInfo });
    }),
    [oAuthUser],
  );

  useEffect(() => {
    firebase.auth().onAuthStateChanged((fbUser) => {
      if (fbUser && !fbUser.isAnonymous) {
        setOAuthUser(fbUser);
        checkUser(fbUser.uid).then((userInfo) => {
          let userObj = {};
          if ('null' in userInfo) {
            userObj = userInfo;
          } else {
            userObj = { fbUser, uid: fbUser.uid, ...userInfo };
          }
          setUser(userObj);
        });
      } else if (fbUser && fbUser.isAnonymous) {
        setUser(false);
        setAnonymousUser(fbUser);
      } else {
        setUser(false);
        setAnonymousUser(false);
      }
    });
  }, []);

  const value = useMemo(
    () => ({
      user,
      updateUser,
      userLoading: (user === null || user === false) && (anonymousUser === null || anonymousUser === false),
      anonymousUser,
    }),
    [user, updateUser, anonymousUser],
  );

  return <AuthContext.Provider value={value} {...props} />;
};
const AuthConsumer = AuthContext.Consumer;

const useAuth = () => {
  const context = useContext(AuthContext);

  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export { AuthProvider, useAuth, AuthConsumer };
