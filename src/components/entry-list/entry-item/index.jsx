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
  return (
    <div className='entry-list-container'>
      <div className='entry-list-items'>
        <div>
          {data.date} {data.time} {data.measured} {data.sugarConcentration}{' '}
          mmol/L
        </div>
      </div>
    </div>
  );
};

export default EntryItem;
