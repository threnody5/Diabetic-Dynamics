import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Navigate } from 'react-router-dom';
import AddPetButton from '../add-pet-button';
import { loadPetsFromDatabase } from '../../api/read';
import { addPet } from '../../util/redux/petInfoSlice';
import Pets from '../pets';
import './styles.scss';

const SignedIn = () => {
  const loggedInStatus = useSelector(
    (state) => state.loggedInStatus.loggedIn
  );
  const dispatch = useDispatch();
  // useEffect(() => {
  // (async () => {
  //   const data = await loadPetsFromDatabase();
  //   console.log(data);
  //   dispatch(addPet(data));
  // })();
  // });

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
