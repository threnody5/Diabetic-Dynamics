import { ref, onValue } from 'firebase/database';
import { database } from './FirebaseConfig';

export const loadPetsFromDatabase = (userID) => {
  try {
    const databaseRef = ref(database, '/users/' + userID + '/pets/');
    const petsArray = [];
    onValue(databaseRef, (snapshot) => {
      snapshot.forEach((childSnapShot) => {
        const childKey = childSnapShot.key;
        const childData = childSnapShot.val();
        petsArray.push({
          ...childData,
          id: childKey,
        });
      });
    });
    return petsArray;
  } catch (err) {
    console.error(err);
  }
};

export const loadPetByID = (userID) => {
  const databaseRef = ref(database, '/users/' + userID + '/pets/');
  onValue(databaseRef, (snapshot) => {
    snapshot.forEach((childSnapShot) => {
      // console.log('Child Key: ', childSnapShot.key);
    });
    // const data = snapshot.val();
    // console.log('Load Pets From ID: ', data);
  });
};
