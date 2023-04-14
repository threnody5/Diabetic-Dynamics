import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import Pet from './pet';
import './styles.scss';

/**
 * Displays the list of pets the user has added.
 * - Fetches the array of pets from the redux store and maps over each pet, creating the Pet component.
 * @returns
 * - The list of pets that have been added from the user.
 * - If no pets are available, displays a Loading message for the user.
 */
const Pets = ({ isLoading }) => {
  const [messageToUser, setMessageToUser] = useState('Loading...');
  const petInfo = useSelector((state) => state.petInfo.pet);
  const loggedInStatus = useSelector((state) => state.loggedInStatus.loggedIn);

  // Updates the petInfoUpdated property to true if pet Info has been updated.
  useEffect(() => {
    if (isLoading === false && petInfo.length === 0) {
      setMessageToUser('No data found.');
    }
  }, [isLoading, petInfo]);
  return (
    <>
      {/* If the user is logged in, maps through the petInfo array to return each pet to the Pet component */}
      {loggedInStatus ? (
        <div className='pet-parent-container'>
          {petInfo.length === 0 || isLoading ? (
            // Loading message css styling is in index.css in src folder.
            <div className='loading-message-container'>
              <div className='loading-message'>{messageToUser}</div>
            </div>
          ) : (
            <div className='pet-container'>
              {petInfo.map((pet, index) => {
                return (
                  <Pet
                    key={index}
                    name={pet.name}
                    image={pet.image}
                    id={pet.id}
                  />
                );
              })}
            </div>
          )}
        </div>
      ) : (
        // If the user is not logged in, redirects them back to the home page.
        <Navigate to='/' />
      )}
    </>
  );
};

export default Pets;
