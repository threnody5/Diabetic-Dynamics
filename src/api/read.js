import { getDatabase, ref, onValue } from 'firebase/database';

export const loadPetsFromDatabase = (userID) => {
  const database = getDatabase();
  try {
    const arrayOfPets = ref(database, 'users/' + userID);
    onValue(arrayOfPets, (snapshot) => {
      const data = snapshot.val();
      return data;
    });
  } catch (err) {
    console.error(err);
  }
};
