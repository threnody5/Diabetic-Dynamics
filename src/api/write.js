import { getDatabase, ref, set } from 'firebase/database';
// import { database } from './FirebaseConfig';

export const addPetToDatabase = (data, userID) => {
  const database = getDatabase();
  console.log('Error comes from database');
  set(ref(database, userID + '/pets'), {
    name: data.name,
    image: data.image,
  });
};
