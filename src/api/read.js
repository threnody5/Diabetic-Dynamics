import { ref, onValue } from 'firebase/database';
import { database } from './FirebaseConfig';

/**
 * Loads the pets information from the database.
 * @param {string} userID
 * @returns
 * An array of objects containing the pets information, and the snapshot.key as an ID.
 */
export const loadPetsFromDatabase = (userID) => {
  return new Promise((resolve, reject) => {
    try {
      const databaseRef = ref(database, `/users/${userID}/pets/`);
      onValue(databaseRef, (snapshot) => {
        const petsArray = [];
        snapshot.forEach((childSnapShot) => {
          try {
            const childKey = childSnapShot.key;
            const childData = childSnapShot.val();
            if (typeof childData === 'object' && childData !== null) {
              petsArray.push({
                ...childData,
                id: childKey,
              });
            }
          } catch (err) {
            console.error(err);
          }
        });
        resolve(petsArray);
      });
    } catch (err) {
      console.error(err);
      reject(err);
    }
  });
};

/**
 * Loads the blood sugar entries from the database.
 * @param {string} userID
 * String returned from the database when the user logs in.
 * @param {string} petID
 * String returned from useParams in URL when the user selects a pet.
 * @returns
 * An array of blood sugar entries for the selected pet.
 */
export const loadEntriesFromDatabase = (userID, petID) => {
  return new Promise((resolve, reject) => {
    try {
      const databaseRef = ref(
        database,
        `/users/${userID}/pets/${petID.id}/entries`
      );
      const entriesArray = [];
      onValue(databaseRef, (snapshot) => {
        snapshot.forEach((childSnapShot) => {
          const childData = childSnapShot.val();
          entriesArray.push({
            ...childData,
          });
        });
        resolve(entriesArray);
      });
    } catch (err) {
      console.error(err);
      reject(err);
    }
  });
};
