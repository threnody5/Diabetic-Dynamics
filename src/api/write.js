import { getDatabase, ref, set, remove } from 'firebase/database';
import { v4 as uuid } from 'uuid';

/**
 * Saves the users pet information to the database.
 * @param {object} data
 * Object containing the pets name and URL reference for the image.
 * @param {string} userID
 * String returned from useParams in URL when the user selects a pet.
 */
const addPetToDatabase = (data, userID) => {
  const database = getDatabase();
  const updatedData = { ...data, name: data.name, image: data.image };
  set(ref(database, `users/${userID}/pets/${data.name}--${uuid()}`), {
    ...updatedData,
  });
};

/**
 * Removes the users selected pet from the database.
 * @param {string} userID
 * String returned from the database when the user logs in.
 * @param {string} petID
 * String returned from useParams in URL when the user has selected a pet.
 */
const removePetFromDatabase = (userID, petID) => {
  const database = getDatabase();
  remove(ref(database, `users/${userID}/pets/${petID}`));
};

/**
 * Saves the blood-glucose level entry information to the database for the users selected pet.
 * @param {object} data
 * Object containing the blood-glucose value, measured value, selected date and time.
 * @param {string} userID
 * String returned from the database when the user logs in.
 * @param {string} petID
 * String returned from useParams in URL when the user has selected a pet.
 */
const addEntryToDatabase = (data, userID, petID) => {
  const database = getDatabase();
  const entryID = `${uuid()}`;
  const updatedData = {
    ...data,
    sugarConcentration: data.sugarConcentration,
    measured: data.measured,
    date: data.date,
    time: data.time,
    entryID: entryID,
  };
  set(
    ref(
      database,
      `users/${userID}/pets/${petID.id}/entries/${data.date}/${data.time}--${entryID}`
    ),
    {
      ...updatedData,
    }
  );
};

/**
 * Removes the specific blood-glucose level entry the user has selected from the database.
 * @param {string} userID
 * String returned from the database if the user is logged in.
 * @param {string} petID
 * String returned from useParams in the URL when the user selected a pet.
 * @param {string} date
 * String of the date from the selected entry the user is deleting.
 * @param {string} time
 * String of the time from the selected entry the user is deleting.
 * @param {string} entryID
 * String of the selected ID from the entry the user is deleting.
 */
const removeEntryFromDatabase = (userID, petID, date, time, entryID) => {
  const database = getDatabase();
  remove(
    ref(
      database,
      `users/${userID}/pets/${petID}/entries/${date}/${time}--${entryID}`
    )
  );
};

export {
  addPetToDatabase,
  removePetFromDatabase,
  addEntryToDatabase,
  removeEntryFromDatabase,
};
