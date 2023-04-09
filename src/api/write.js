import { getDatabase, ref, set } from 'firebase/database';
import { v4 as uuid } from 'uuid';

export const addPetToDatabase = (data, userID) => {
  const database = getDatabase();
  const updatedData = { ...data, name: data.name, image: data.image };
  set(ref(database, `users/${userID}/pets/${uuid()}--${data.name}`), {
    ...updatedData,
  });
};

export const addEntryToDatabase = (data, userID, petID) => {
  const database = getDatabase();
  const updatedData = {
    ...data,
    sugarConcentration: data.sugarConcentration,
    measured: data.measured,
    date: data.date,
    time: data.time,
  };
  set(
    ref(
      database,
      `users/${userID}/pets/${petID.id}/entries/${data.date}/${data.time}`
    ),
    {
      ...updatedData,
    }
  );
};
