import { initializeApp } from "firebase/compat/app";
import 'firebase/compat/app';

const firebaseConfig = {
  apiKey: "AIzaSyDu5qwL0A54iMCu9ZR7jNoczZHFcaMqV-s",
  authDomain: "react-firebase-auth-1a5d8.firebaseapp.com",
  projectId: "react-firebase-auth-1a5d8",
  storageBucket: "react-firebase-auth-1a5d8.appspot.com",
  messagingSenderId: "992033250805",
  appId: "1:992033250805:web:a5669fbb5d7686170b54bc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
