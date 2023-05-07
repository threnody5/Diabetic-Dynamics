import { useSelector, useDispatch } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import Card from '../../../../card';
import EntryList from '../../../../entry-list';
import * as database from '../../../../../api';
import { loadEntries } from '../../../../../util/redux/sugarConcentrationSlice';
import { Navigate } from 'react-router-dom';
import BloodCurveChart from '../../../../blood-curve-chart';
import { setPetID } from '../../../../../util/redux/petIDSlice';
import StickyButton from '../../../../sticky-button';
import AddEntry from '../../../../add-entry';
import RemovePet from '../../../../remove-pet';
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
  const petID = useParams();
  const loggedInStatus = useSelector((state) => state.loggedInStatus.loggedIn);
  const sugarConcentrationEntries = useSelector(
    (state) => state.sugarConcentration.sugarLevelData
  );
  const loadingStatus = useSelector(
    (state) => state.loggedInStatus.loadingStatus
  );
  const navigate = useNavigate();

  useEffect(() => {
    database
      // Loads the entries for the selected pet from the database.
      .loadEntriesFromDatabase(userID, petID)
      .then((entriesArray) => {
        // Combines all the entries into a single object with the Object.assign() method.
        const combinedObject = Object.assign({}, ...entriesArray);

        // Flattens the object into an array using the Object.assign() and .flat() methods.
        const flattenedArray = Object.values(combinedObject).flat();

        // dispatches the loadEntries action with the flattened array.
        dispatch(loadEntries(flattenedArray));
      })
      .catch((err) => {
        console.error(err);
      });
    dispatch(setPetID(petID.id));
    // eslint-disable-next-line
  }, [loggedInStatus, loadingStatus, petID]);

  /**
   * Handler function for navigating the user back to the pet-list page.
   */
  const navigateHandler = () => {
    navigate('/pets-list');
    dispatch(setPetID(null));
  };
  if (loggedInStatus && !loadingStatus) {
    return (
      // If the user is logged in, displays a button to navigate the user back to the previous page,
      // displays the BloodCurveChart component, and if the redux store for entries is greater than 0,
      // loads the EntryList component.
      <>
        <button
          className='go-back-button'
          onClick={navigateHandler}
        >
          Go back
        </button>
        <Card>
          {/* Chart displaying the blood sugar value entered by the user. */}
          <BloodCurveChart />
        </Card>
        {sugarConcentrationEntries.length > 0 && <EntryList />}
        {/* Button allowing the user to add a new entry */}
        <StickyButton
          title='Add New Entry'
          onClick={() => {}}
          Component={AddEntry}
        />
        <RemovePet petID={petID.id} />
      </>
    );
  }

  if (!loggedInStatus && !loadingStatus) {
    return (
      // If the user is not logged in, redirects them back to the home page.
      <Navigate to='/' />
    );
  }
};

export default PetInfo;
