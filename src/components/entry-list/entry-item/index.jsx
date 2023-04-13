import { BsFillTrash3Fill } from 'react-icons/bs';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { RemoveSelectedEntry } from '../../../util/redux/sugarConcentrationSlice';
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

  // Maps numeric values to their corresponding names.
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

  const dateObject = new Date(data.date);
  let day = dateObject.getDate();
  const month = dateObject.getMonth();
  const namedMonth = months[month];
  const year = dateObject.getFullYear();

  day = day + 1;

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
      // Retrieve the selected entry ID and dispatch the remove action to the redux store.
      const selectedEntryID = data.entryID;
      dispatch(RemoveSelectedEntry(selectedEntryID));
    }
  };

  return (
    <div className='entry-list-container'>
      <div className='entry-list-items'>
        <div className='entry-item-date'>
          {namedMonth}, {day}, {year}
        </div>
        <div className='entry-item-time'>{data.time}</div>
        <div className='entry-item-measured'>{data.measured}</div>
        <div
          className='entry-item-sugar-concentration'
          style={{ color: data.sugarConcentration > 6.7 ? 'red' : 'green' }}
        >
          {data.sugarConcentration}{' '}
        </div>{' '}
        mmol/L
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
