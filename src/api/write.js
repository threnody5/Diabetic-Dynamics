import { getDatabase, ref, set } from 'firebase/database';
// import { database } from './FirebaseConfig';
import { v4 as uuid } from 'uuid';

// export const addPetToDatabase = (data, userID) => {
//   const database = getDatabase();
//   set(ref(database, `users/${userID}/pets/${uuid()}--${data.name}`), {
//     name: data.name,
//     image: data.image,
//   });
// };

export const addPetToDatabase = (data, userID) => {
  const database = getDatabase();
  const updatedData = { ...data, name: data.name, image: data.image };
  set(ref(database, `users/${userID}/pets/${uuid()}--${data.name}`), {
    ...updatedData,
  });
};
