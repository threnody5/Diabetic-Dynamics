import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Navigate } from 'react-router-dom';
import Pets from './pets';
import * as database from '../../api';
import { loadPets } from '../../util/redux/petInfoSlice';
import StickyButton from '../sticky-button';
import AddPet from '../add-pet';

/**
 * Loads the list of pets from the database, and adds them to the redux store.
 * @returns
 * - If the user is logged in, displays the Pets and AddPetButton components.
 * - If the user is not logged in, navigates them back to the Home page.
 */
const PetsList = () => {
  const [isLoading, setIsLoading] = useState(true);
  const loggedInStatus = useSelector((state) => state.loggedInStatus.loggedIn);
  const userID = useSelector((state) => state.userID.id);
  const dispatch = useDispatch();

  useEffect(() => {
    // Loads the pets from the database with th provided userID.
    database
      .loadPetsFromDatabase(userID)
      .then((petsArray) => {
        // dispatches the loadPets action to the redux store, with the array of pets passed in as the payload.
        dispatch(loadPets(petsArray));
        setIsLoading(false);
      })
      .catch((err) => {
        console.error(err);
      });
  }, [userID, dispatch]);

  return (
    <>
      {/* If the user is logged in, returned the list of their pets */}
      {loggedInStatus ? (
        <>
          <Pets isLoading={isLoading} />
          <div>
            {/* Button allowing the user to add a pet to their list of pets */}
            <StickyButton
              title='Add Pet'
              onClick={() => {}}
              Component={AddPet}
            />
          </div>
        </>
      ) : (
        // If the user is not logged in, redirects them back to the home page.
        <Navigate to='/' />
      )}
    </>
  );
};

export default PetsList;
