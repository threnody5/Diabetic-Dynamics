import { getDatabase, ref, set } from 'firebase/database';
// import { database } from './FirebaseConfig';
import { v4 as uuid } from 'uuid';

export const addPetToDatabase = (data, userID) => {
  const database = getDatabase();
  set(ref(database, `${userID}/pets/${uuid()}--${data.name}`), {
    name: data.name,
    image: data.image,
  });
};
