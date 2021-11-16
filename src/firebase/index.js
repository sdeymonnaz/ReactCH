import firebase from 'firebase/compat/app';
import 'firebase/compat/database';
import 'firebase/compat/firestore';


const app = firebase.initializeApp({
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  projectId: "apolloni-e7ce3",
  storageBucket: "apolloni-e7ce3.appspot.com",
  messagingSenderId: "948775172465",
  appId: "1:948775172465:web:9578da1ff09b5001b61ed0"
});

export const getFirebase = () => app;

export const getFirestore = () => firebase.firestore(app);

