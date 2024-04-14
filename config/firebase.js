// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import {getAuth} from 'firebase/auth'
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDfGSOam4Kdv7_a5JdkDbE98SUw8vS-RE8",
  authDomain: "moviematching-5fdf3.firebaseapp.com",
  projectId: "moviematching-5fdf3",
  storageBucket: "moviematching-5fdf3.appspot.com",
  messagingSenderId: "1031351577430",
  appId: "1:1031351577430:web:f5b61fcde4e10a371d04f7",
  measurementId: "G-VBBLEB7YF6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app);