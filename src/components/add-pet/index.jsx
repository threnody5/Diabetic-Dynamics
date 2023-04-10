import { useState, useRef } from 'react';
import { useSelector } from 'react-redux';
import * as database from './../../api';
import { uploadImage } from '../../api/storage';
import './styles.scss';

/**
 * Component for the user to add a pet to the database.
 * @param {boolean} props
 * Boolean controlling displaying the modal form.
 * @returns
 * Returns the JSX form for adding the entry to the database.
 */
const AddPet = (props) => {
  const userID = useSelector((state) => state.userID.id);
  const [petName, setPetName] = useState('');
  const [selectedImage, setSelectedImage] = useState('');
  const [errorMessages, setErrorMessages] = useState([]);
  const [successMessage, setSuccessMessage] = useState('');
  const inputFile = useRef();

  /**
   * Handler function for when the user selects an image for their pet.
   * @param {event} e
   * Retrieves an event when the user selects an image for their pet.
   */
  const handlePictureSelection = (e) => {
    const file = e.target.files[0];
    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);
    fileReader.onload = (e) => {
      setSelectedImage(e.target.result);
    };
  };

  /**
   * Clears the fields for the user when the close button is clicked.
   */
  const clearFields = () => {
    setPetName('');
    setSelectedImage('');
  };

  /**
   * Adds the entered information to the pets list.
   * - If all checks aren't passed, error message is displayed informing the user.
   * - If all checks are passed, information is stored in redux state, and in the database.
   */
  const addPetHandler = async () => {
    const validate = [];
    setErrorMessages([]);
    setSuccessMessage('');
    if (petName === '') {
      validate.push('Please enter a pet name.');
    }
    if (selectedImage === '') {
      validate.push('Please select an image.');
    }

    if (validate.length > 0) {
      setErrorMessages(validate);
    }

    if (validate.length === 0) {
      const file = inputFile.current.files[0];
      const pictureURL = await uploadImage(file);

      const data = {
        name: petName,
        image: pictureURL,
      };

      database.addPetToDatabase(data, userID);
      // TODO: Load pets from the database, to retrieve the pet ID's.
      // loadPetsFromDatabase(userID);
      setPetName('');
      setSelectedImage('');
      setSuccessMessage('Pet added successfully.');
      inputFile.current.value = '';

      setTimeout(() => {
        setSuccessMessage('');
      }, 3000);
    }
  };

  if (!props.show) {
    return null;
  }

  return (
    <div
      className='modal-container'
      onClick={props.onClose}
    >
      <div
        className='modal-content'
        onClick={(e) => e.stopPropagation()}
      >
        <div className='modal-header'>
          {/* Success Message when the information is stored. */}
          <div className='modal-success-message'>{successMessage}</div>
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
          {/* Form for input of pets name. */}
          <div className='modal-name-input'>
            <label>
              Pet Name:
              <input
                type='text'
                className='pet-name-field'
                onChange={(e) => setPetName(e.target.value)}
                value={petName}
              />
            </label>
          </div>
          <div>
            {/* Form for input of pets picture. */}
            <fieldset className='modal-image-container'>
              <legend>Picture:</legend>
              <label>
                Select an image:{' '}
                <input
                  type='file'
                  accept='image/*'
                  multiple={false}
                  onChange={handlePictureSelection}
                  ref={inputFile}
                />
              </label>
              {/* Displays the selected image for the user, if an image has been selected. */}
              {selectedImage !== '' && (
                <img
                  src={selectedImage}
                  alt='Preview'
                  width={200}
                />
              )}
            </fieldset>
          </div>
        </div>
        <div className='modal-button-container'>
          {/* Button which handles adding the data to the redux state, and the database. */}
          <button
            className='modal-button'
            onClick={addPetHandler}
          >
            Add Pet
          </button>
          {/* Button to close the modal, clearing the input fields. */}
          <button
            className='modal-button'
            onClick={() => {
              props.onClose();
              clearFields();
              setErrorMessages([]);
            }}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddPet;
