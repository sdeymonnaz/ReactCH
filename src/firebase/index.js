import firebase from 'firebase/compat/app';
import 'firebase/compat/database';
import 'firebase/compat/firestore';


const app = firebase.initializeApp({
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  projectId: "apolloni-e7ce3",
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.FIREBASE_APP_ID
});

export const getFirebase = () => app;

export const getFirestore = () => firebase.firestore(app);

