import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addSugarLevelData } from '../../util/redux/sugarConcentrationSlice';
import { useParams } from 'react-router-dom';
import { addEntryToDatabase } from '../../api/write';
import './styles.scss';

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

  const addEntryHandler = () => {
    const validate = [];
    setErrorMessages([]);

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

    if (validate.length === 0) {
      const data = {
        id: petID.id,
        sugarConcentration: sugarConcentration,
        measured: measured,
        date: date,
        time: time,
      };

      setSuccessMessage('Entry successfully saved.');
      dispatch(addSugarLevelData(data));
      addEntryToDatabase(data, userID, petID);
      setSugarConcentration('');
      setMeasured('');
      setDate('');
      setTime('');

      setTimeout(() => {
        setSuccessMessage('');
      }, 2500);
    }

    if (validate.length > 0) {
      setErrorMessages(validate);
    }
  };

  if (!props.show) {
    return null;
  }

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
          <div className='modal-success-message'>{successMessage}</div>
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
          <div className='modal-sugar-concentration-input'>
            <label>
              Sugar Concentration
              <input
                type='number'
                title='e.g. 7.3'
                value={sugarConcentration}
                onChange={(e) => setSugarConcentration(e.target.value)}
              />
              mmol/L
            </label>
          </div>
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
            <button
              className='modal-button'
              onClick={addEntryHandler}
            >
              Add Entry
            </button>
            <button
              className='modal-button'
              onClick={() => {
                props.onClose();
                setErrorMessages([]);
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
