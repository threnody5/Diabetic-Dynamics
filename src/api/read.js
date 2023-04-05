import { getDatabase, ref, child, get } from 'firebase/database';
import { v4 as uuid } from 'uuid';

export const loadPetsFromDatabase = (userID) => {
  const databaseRef = ref(getDatabase());
  get(child(databaseRef, `${userID}/pets`))
    .then((snapshot) => {
      if (snapshot.exists()) {
        console.log(snapshot.val());
      } else {
        console.error('No data available.');
        console.log(userID);
      }
    })
    .catch((err) => {
      console.error(err);
    });
  // const petRef = ref(database, `${userID}/pets/${uuid()}`);
};
