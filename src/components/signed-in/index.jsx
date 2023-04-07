import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Navigate } from 'react-router-dom';
import AddPetButton from '../add-pet-button';
import { database } from '../../api/FirebaseConfig';
import { ref, get, child } from 'firebase/database';
import Pets from '../pets';
import { loadPets } from '../../util/redux/petInfoSlice';
import './styles.scss';

const SignedIn = () => {
  const loggedInStatus = useSelector((state) => state.loggedInStatus.loggedIn);
  const userID = useSelector((state) => state.userID.id);
  const dispatch = useDispatch();

  useEffect(() => {
    const databaseRef = ref(database);
    get(child(databaseRef, '/users/' + userID))
      .then((snapshot) => {
        if (snapshot.exists()) {
          const retrievedData = snapshot.val().pets;
          const petsArray = [];
          Object.values(retrievedData).forEach(function (data) {
            petsArray.push(data);
          });
          dispatch(loadPets(petsArray));
        } else {
          console.log('No data available.');
        }
      })
      .catch((err) => {
        console.error(err);
      });
    // eslint-disable-next-line
  }, []);

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

export default SignedIn;
