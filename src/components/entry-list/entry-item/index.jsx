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
  console.log('Date Object: ', dateObject);

  day = day + 1;

  if (day < 10) {
    day = '0' + day;
  }

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
      </div>
    </div>
  );
};

export default EntryItem;
