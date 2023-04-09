import { ref, onValue } from 'firebase/database';
import { database } from './FirebaseConfig';

/**
 * Loads the pets information from the database.
 * @param {string} userID
 * @returns
 * An array of objects containing the pets information, and the snapshot.key as an ID.
 */
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
  const databaseRef = ref(
    database,
    `/users/${userID}/pets/${petID.id}/entries`
  );
  const entriesArray = [];
  onValue(
    databaseRef,
    (snapshot) => {
      snapshot.forEach((childSnapShot) => {
        const childData = childSnapShot.val();
        entriesArray.push({
          ...childData,
        });
      });
    },
    { onlyOnce: true }
  );
  return entriesArray;
};
