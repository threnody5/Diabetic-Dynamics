import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getDatabase } from 'firebase/database';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: 'AIzaSyAaxfBvngtIgQGOKcGvgqNB4thIY6ispwk',
  authDomain: 'react-js4-final-project-app.firebaseapp.com',
  projectId: 'react-js4-final-project-app',
  storageBucket: 'react-js4-final-project-app.appspot.com',
  messagingSenderId: '878125714956',
  appId: '1:878125714956:web:e1510e6ab93ef38123a829',
  databaseURL:
    'https://react-js4-final-project-app-default-rtdb.firebaseio.com',
};

export const app = initializeApp(firebaseConfig);
export const authentication = getAuth(app);
export const database = getDatabase(app);
export const storage = getStorage(app);
