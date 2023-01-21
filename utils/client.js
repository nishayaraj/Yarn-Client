import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

const firebaseCredentials = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
};

const clientCredentials = {
  ...firebaseCredentials,
  apiUrl: process.env.NEXT_PUBLIC_YARN_SERVER_API,
};

if (!firebase.apps.length) {
  firebase?.initializeApp(firebaseCredentials);
}

export { firebase, clientCredentials };
