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
    // Creates an empty array for the error messages.
    const validate = [];

    // Clears the error messages when the user attempts to add a new entry.
    setErrorMessages([]);

    // Clears the success messages when the user attempts to add a new entry.
    setSuccessMessage('');

    // Perform validation checks to ensure required fields are filled out.
    if (petName === '') {
      validate.push('Please enter a pet name.');
    }
    if (selectedImage === '') {
      validate.push('Please select an image.');
    }

    // If error message were added to the validate array, sets the error messages to inform the user.
    if (validate.length > 0) {
      setErrorMessages(validate);
    }

    // If all required fields are filled out, create an object with the data.
    if (validate.length === 0) {
      const file = inputFile.current.files[0];
      const pictureURL = await uploadImage(file);

      const data = {
        name: petName,
        image: pictureURL,
      };

      // Adds the pet to the database.
      database.addPetToDatabase(data, userID);
      // TODO: Load pets from the database, to retrieve the pet ID's.
      // loadPetsFromDatabase(userID);

      // Clears the input fields for the user.
      setPetName('');
      setSelectedImage('');
      inputFile.current.value = '';

      // Informs the user that the pet entry was successful.
      setSuccessMessage('Pet added successfully.');

      // Clears the success message for the user after 2.5 seconds.
      setTimeout(() => {
        setSuccessMessage('');
      }, 2500);
    }
  };

  // If the modal should not be displayed, return null.
  if (!props.show) {
    return null;
  }

  // If the modal should be displayed, render the modal container,
  // and add event listener to close the modal when clicked outside.
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
