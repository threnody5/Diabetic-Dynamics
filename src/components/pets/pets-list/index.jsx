import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Navigate } from 'react-router-dom';
import AddPetButton from '../../add-pet-button';
import { database } from '../../../api/FirebaseConfig';
import { ref, onValue } from 'firebase/database';
import Pets from '..';
// import { loadPetsFromDatabase } from '../../../api/read';
import { loadPets } from '../../../util/redux/petInfoSlice';

/**
 * Loads the list of pets from the database, and adds them to the redux store.
 * @returns
 * - If the user is logged in, displays the Pets and AddPetButton components.
 * - If the user is not logged in, navigates them back to the Home page.
 */
const PetsList = () => {
  const loggedInStatus = useSelector((state) => state.loggedInStatus.loggedIn);
  const userID = useSelector((state) => state.userID.id);
  const dispatch = useDispatch();

  useEffect(() => {
    // const petsArrayTest = loadPetsFromDatabase(userID);
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
      dispatch(loadPets(petsArray));
    });
  }, [dispatch, userID]);

  return (
    <>
      {loggedInStatus ? (
        <>
          <Pets />
          <div>
            <AddPetButton />
          </div>
        </>
      ) : (
        <Navigate to='/' />
      )}
    </>
  );
};

export default PetsList;
