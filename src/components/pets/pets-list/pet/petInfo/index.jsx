import { useSelector, useDispatch } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Card from '../../../../Card';
import AddEntryButton from '../../../../add-entry-button';
import EntryList from '../../../../entry-list';
import * as database from './../../../../../api';
import { loadEntries } from '../../../../../util/redux/sugarConcentrationSlice';
import { Navigate } from 'react-router-dom';
import './styles.scss';

/**
 * Displays the selected pets name and image, and lists the entries of blood glucose the user has entered.
 * Entries are loaded from the database, and set in the redux store.
 * @returns
 * - The card containing the selected pets name and image.
 * - The list of entries if the entries list length is greater than 0.
 */
const PetInfo = () => {
  const dispatch = useDispatch();
  const userID = useSelector((state) => state.userID.id);
  const [petName, setPetName] = useState('');
  const [petImage, setPetImage] = useState('');
  const petID = useParams();
  const loggedInStatus = useSelector((state) => state.loggedInStatus.loggedIn);
  const petInfo = useSelector((state) => state.petInfo.pet);
  const sugarConcentrationEntries = useSelector(
    (state) => state.sugarConcentration.sugarLevelData
  );
  const navigate = useNavigate();

  useEffect(() => {
    petInfo.forEach((pet) => {
      if (petID.id === pet.id) {
        setPetName(pet.name);
        setPetImage(pet.image);
      }
    });

    database
      .loadEntriesFromDatabase(userID, petID)
      .then((entriesArray) => {
        const combinedObject = Object.assign({}, ...entriesArray);
        const flattenedArray = Object.values(combinedObject).flat();
        dispatch(loadEntries(flattenedArray));
      })
      .catch((err) => {
        console.error(err);
      });
    // eslint-disable-next-line
  }, []);

  /**
   * Handler function for navigating the user back to the pet-list page.
   */
  const navigateHandler = () => {
    navigate('/pets-list');
  };
  return (
    <>
      {loggedInStatus ? (
        <>
          <Card>
            <div className='selected-pet-card'>
              <div>
                <h3>{petName.toUpperCase()}</h3>
              </div>
              <div>
                <img
                  src={petImage}
                  width={200}
                  alt=''
                />
              </div>
              <button
                className='go-back-button'
                onClick={navigateHandler}
              >
                Go back
              </button>
            </div>
          </Card>
          {sugarConcentrationEntries.length > 0 && <EntryList />}
          <AddEntryButton />
        </>
      ) : (
        <Navigate to='/' />
      )}
    </>
  );
};

export default PetInfo;
