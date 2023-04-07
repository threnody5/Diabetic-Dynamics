import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Navigate } from 'react-router-dom';
import AddPetButton from '../../add-pet-button';
import { database } from '../../../api/FirebaseConfig';
import { ref, onValue } from 'firebase/database';
import Pets from '..';
import { loadPets } from '../../../util/redux/petInfoSlice';
// import { loadPetByID } from '../../../api/read';

const PetsList = () => {
  const loggedInStatus = useSelector((state) => state.loggedInStatus.loggedIn);
  const userID = useSelector((state) => state.userID.id);
  const dispatch = useDispatch();

  useEffect(() => {
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
    // eslint-disable-next-line
  }, []);

  // useEffect(() => {
  //   loadPetByID(userID);
  // }, []);

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
