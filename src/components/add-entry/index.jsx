import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addSugarLevelData } from '../../util/redux/sugarConcentrationSlice';
import { useParams } from 'react-router-dom';
import * as database from './../../api';
import './styles.scss';

/**
 * Component for the user to add a blood-glucose entry to the database.
 * @param {boolean} props
 * Boolean for displaying the modal form.
 * @returns
 * Returns the JSX form for adding the entry to the database.
 */
const AddEntry = (props) => {
  const userID = useSelector((state) => state.userID.id);
  const [sugarConcentration, setSugarConcentration] = useState('');
  const [measured, setMeasured] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [errorMessages, setErrorMessages] = useState([]);
  const [successMessage, setSuccessMessage] = useState('');
  const dispatch = useDispatch();
  const petID = useParams();

  // An array of objects containing possible measurements options.
  const measuredList = [
    {
      value: 'Please select a value',
    },
    {
      value: 'After breakfast',
    },
    {
      value: 'After lunch',
    },
    {
      value: 'After dinner',
    },
  ];

  /**
   * Adds the entered information to the blood-glucose entries.
   * - If all checks aren't passed, error message is displayed informing the user.
   * - If all checks are passed, information is stored in redux state, and in the database.
   */
  const addEntryHandler = async () => {
    // Creates an empty array for the error messages.
    const validate = [];

    // Clears the error messages when the user attempts to add a new entry.
    setErrorMessages([]);

    // Perform validation checks to ensure required fields are filled out.
    if (sugarConcentration.length === 0) {
      validate.push('Please enter a value for blood-glucose level.');
    }

    if (measured === '') {
      validate.push('Please select a value for measured meal.');
    }

    if (date === '') {
      validate.push('Please select a date.');
    }

    if (time === '') {
      validate.push('Please select a time.');
    }

    // If all required fields are filled out, create an object with the data.
    if (validate.length === 0) {
      const data = {
        id: petID.id,
        sugarConcentration: sugarConcentration,
        measured: measured,
        date: date,
        time: time,
      };

      // Informs the user that the entry was successful.
      setSuccessMessage('Entry successfully saved.');

      //! previous dispatch method.
      // Adds the entry to the redux store.
      // dispatch(addSugarLevelData(data));

      // Adds the entry to the database.
      database.addEntryToDatabase(data, userID, petID);

      // Clears the input fields for the user.
      setSugarConcentration('');
      setMeasured('');
      setDate('');
      setTime('');

      // Clears the success message for the user after 2.5 seconds.
      setTimeout(() => {
        setSuccessMessage('');
      }, 2500);

      await database
        // TODO: ask about correct data management.
        // after adding the entries to the database, loads the data from the database
        // to update the redux store.
        .loadEntriesFromDatabase(userID, petID)
        .then((entriesArray) => {
          // Combines all the entries into a single object with the Object.assign() method.
          const combinedObject = Object.assign({}, ...entriesArray);

          // Flattens the object into an array using the Object.assign() and .flat() methods.
          const flattenedArray = Object.values(combinedObject).flat();
          dispatch(addSugarLevelData(flattenedArray));
        })
        .catch((err) => {
          console.error(err);
        });
    }

    // If error message were added to the validate array, sets the error messages to inform the user.
    if (validate.length > 0) {
      setErrorMessages(validate);
    }
  };

  /**
   * Clears the fields for the user when the close button is clicked.
   */
  const clearFields = () => {
    setErrorMessages([]);
    setSugarConcentration('');
    setMeasured('');
    setDate('');
    setTime('');
  };

  // If the modal should not be displayed, return null.
  if (!props.show) {
    return null;
  }

  // If the modal should be displayed, render the modal container,
  // and add event listener to close the modal when clicked outside.
  return (
    <div
      className='modal-container-add-entry'
      onClick={props.onClose}
    >
      <div
        className='modal-content'
        onClick={(e) => e.stopPropagation()}
      >
        <div className='modal-header'>
          {/* Success Message when the information is stored. */}
          <div className='modal-success-message'>
            {successMessage}
          </div>
          {/* Error Messages when the entered information doesn't pass the checks. */}
          <div className='modal-error-messages'>
            {errorMessages.map((errorMessage, index) => {
              return (
                <div key={index}>
                  <ul>{errorMessage}</ul>
                </div>
              );
            })}
          </div>
        </div>

        <div className='modal-body'>
          {/* Form for input of sugar concentration. */}
          <div className='modal-sugar-concentration-input'>
            <label>
              Sugar Concentration
              <input
                type='number'
                title='e.g. 7.3'
                value={sugarConcentration}
                onChange={(e) =>
                  setSugarConcentration(e.target.value)
                }
              />
              mmol/L
            </label>
          </div>
          {/* Form for input of when the blood was tested, in relation to pets most recent meal. */}
          <div className='modal-sugar-concentration-measured'>
            <label>
              Measured{' '}
              <select
                className='modal-sugar-concentration-measured-list'
                title='Choose an option...'
                value={measured}
                onChange={(e) => setMeasured(e.target.value)}
              >
                {measuredList.map((item, index) => (
                  <option
                    key={index}
                    value={item.value}
                  >
                    {item.value}
                  </option>
                ))}
              </select>
            </label>
          </div>
          <div className='date-time-container'>
            {/* Form for input of the date the blood sugar was tested.  */}
            <div className='modal-sugar-concentration-date'>
              <label>
                Date
                <input
                  type='date'
                  title='Date administered'
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                />
              </label>
            </div>
            {/* Form for input of the time the blood sugar was tested. */}
            <div className='modal-sugar-concentration-time'>
              <label>
                Time
                <input
                  type='time'
                  title='Time administered'
                  value={time}
                  onChange={(e) => setTime(e.target.value)}
                />
              </label>
            </div>
          </div>
          <div className='modal-button-container'>
            {/* Button which handles adding the data to the redux state, and the database. */}
            <button
              className='modal-button'
              onClick={addEntryHandler}
            >
              Add Entry
            </button>
            {/* Button to close the modal, clearing the input fields. */}
            <button
              className='modal-button'
              onClick={() => {
                props.onClose();
                clearFields();
              }}
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddEntry;
