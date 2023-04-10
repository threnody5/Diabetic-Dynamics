import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Navigate } from 'react-router-dom';
import AddPetButton from '../../add-pet-button';
import Pets from '..';
import { loadPetsFromDatabase } from '../../../api/read';
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

  // TODO: state should update when the user adds a new pet, allowing the user to go to the selected pets page.
  useEffect(() => {
    loadPetsFromDatabase(userID)
      .then((petsArray) => {
        dispatch(loadPets(petsArray));
      })
      .catch((err) => {
        console.error(err);
      });
  }, [userID, dispatch]);

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
