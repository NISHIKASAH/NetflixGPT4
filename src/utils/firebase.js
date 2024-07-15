// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAeVjcKvqWyhzY0oA_LFAAB_t_USUHDQns",
  authDomain: "streamify-gpt-5b56e.firebaseapp.com",
  projectId: "streamify-gpt-5b56e",
  storageBucket: "streamify-gpt-5b56e.appspot.com",
  messagingSenderId: "559670120588",
  appId: "1:559670120588:web:f875e536db5d0e97572ba9",
  measurementId: "G-1F7JKKTNG2",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
