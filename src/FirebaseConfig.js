/** @format */

// Import the functions you need from the SDKs you need

import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: 'AIzaSyAaxfBvngtIgQGOKcGvgqNB4thIY6ispwk',
  authDomain: 'react-js4-final-project-app.firebaseapp.com',
  projectId: 'react-js4-final-project-app',
  storageBucket: 'react-js4-final-project-app.appspot.com',
  messagingSenderId: '878125714956',
  appId: '1:878125714956:web:e1510e6ab93ef38123a829',
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
export const authentication = getAuth(app);
