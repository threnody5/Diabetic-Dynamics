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
const Pets = () => {
  const petInfo = useSelector((state) => state.petInfo.pet);
  const loggedInStatus = useSelector((state) => state.loggedInStatus.loggedIn);
  return (
    <>
      {loggedInStatus ? (
        <>
          {petInfo.length === 0 ? (
            <div>Loading...</div>
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
        </>
      ) : (
        <Navigate to='/' />
      )}
    </>
  );
};

export default Pets;
