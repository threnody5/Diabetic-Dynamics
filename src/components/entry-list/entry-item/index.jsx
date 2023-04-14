import { BsFillTrash3Fill } from 'react-icons/bs';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { RemoveSelectedEntry } from '../../../util/redux/sugarConcentrationSlice';
import { removeEntryFromDatabase } from '../../../api';
import './styles.scss';

/**
 * Displays the details of a single sugar concentration entry.
 * @param {object} data
 * @returns
 * - Date of the entry.
 * - Time of the entry.
 * - Time in conjunction with the closest meal eaten.
 * - Blood Glucose level taken from the user.
 */
const EntryItem = ({ data }) => {
  const dispatch = useDispatch();
  const sugarConcentrationEntries = useSelector(
    (state) => state.sugarConcentration.sugarLevelData
  );
  const userID = useSelector((state) => state.userID.id);

  // Maps numeric values to their corresponding month.
  const months = {
    0: 'January',
    1: 'February',
    2: 'March',
    3: 'April',
    4: 'May',
    5: 'June',
    6: 'July',
    7: 'August',
    8: 'September',
    9: 'October',
    10: 'November',
    11: 'December',
  };

  // Creates a new Data object based on the date that is provided in the data object.
  const dateObject = new Date(data.date);
  // Retrieves the day of the month from the date object.
  let day = dateObject.getDate();
  // Retrieves the numeric month value from the date object.
  const month = dateObject.getMonth();
  // Retrieves the named month value from the months object based on the numeric month value.
  const namedMonth = months[month];
  // retrieves the year value from the date object.
  const year = dateObject.getFullYear();

  day = day + 1;

  // Adds a leading 0 if the day value is less than 10.
  if (day < 10) {
    day = '0' + day;
  }

  /**
   * Handles removing the selected entry from the sugar concentration entries array and the redux store.
   */
  const trashEntryHandler = () => {
    // Retrieve all entry IDs from the sugar concentration entries array.
    const entryIDs = sugarConcentrationEntries
      .map((entry) => entry.entryID)
      .flat();

    // Check if the selected entry ID exists in the entry IDs array.
    if (entryIDs.includes(data.entryID)) {
      // const selectedEntryArray = sugarConcentrationEntries;

      // Retrieve the selected entry ID and assign it to a variable.
      const selectedEntryID = data.entryID;

      // Finds the entry in the sugarConcentrationEntries that matches the selectedEntryID value.
      const selectedEntry = sugarConcentrationEntries.find(
        (obj) => obj.entryID === selectedEntryID
      );

      // Variables assigning the selected entry values to shorter names.
      const petID = selectedEntry.id;
      const date = selectedEntry.date;
      const time = selectedEntry.time;
      const entryID = selectedEntry.entryID;

      // Dispatch action removes the selected entry from the state.
      dispatch(RemoveSelectedEntry(selectedEntryID));

      // All arguments passed in are for the URL path for the specified entry to be removed.
      removeEntryFromDatabase(userID, petID, date, time, entryID);
    }
  };

  // Renders the entry list item with the provided data and a delete button.
  return (
    <div className='entry-list-container'>
      <div className='entry-list-items'>
        {/* Displays the formatted date for the entry */}
        <div className='entry-item-date'>
          {namedMonth}, {day}, {year}
        </div>
        {/* Displays the time at which the entry was created */}
        <div className='entry-item-time'>{data.time}</div>
        {/* Displays the closest meal that the entry was taken */}
        <div className='entry-item-measured'>{data.measured}</div>
        {/* Displays the sugar concentration value for the entry, with color coded text based on the value entered*/}
        <div
          className='entry-item-sugar-concentration'
          style={{ color: data.sugarConcentration > 6.7 ? 'red' : 'green' }}
        >
          {data.sugarConcentration}{' '}
        </div>{' '}
        mmol/L
        {/* Deletes the entry when clicked */}
        <button
          onClick={trashEntryHandler}
          className='entry-list-trash'
        >
          <BsFillTrash3Fill />
        </button>
      </div>
    </div>
  );
};

export default EntryItem;
