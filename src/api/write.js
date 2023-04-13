import { getDatabase, ref, set } from 'firebase/database';
import { v4 as uuid } from 'uuid';

/**
 * Saves the users pet information to the database.
 * @param {object} data
 * Object containing the pets name and URL reference for the image.
 * @param {string} userID
 * String returned from useParams in URL when the user selects a pet.
 */
export const addPetToDatabase = (data, userID) => {
  const database = getDatabase();
  const updatedData = { ...data, name: data.name, image: data.image };
  set(ref(database, `users/${userID}/pets/${data.name}--${uuid()}`), {
    ...updatedData,
  });
};

/**
 * Saves the blood-glucose level entry information to the database for the users selected pet.
 * @param {object} data
 * Object containing the blood-glucose value, measured value, selected date and time.
 * @param {string} userID
 * String returned from the database when the user logs in.
 * @param {string} petID
 * String returned from useParams in URL when the user selects a pet.
 */
export const addEntryToDatabase = (data, userID, petID) => {
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
