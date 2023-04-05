import { useState, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { addPet } from '../../util/redux/petInfoSlice';
import './styles.scss';

const AddPet = (props) => {
  const [petName, setPetName] = useState('');
  const [selectedImage, setSelectedImage] = useState('');
  const [errorMessages, setErrorMessages] = useState([]);
  const [successMessage, setSuccessMessage] = useState('');
  const dispatch = useDispatch();
  const inputFile = useRef();

  const handlePictureSelection = (e) => {
    const file = e.target.files[0];
    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);
    fileReader.onload = (e) => {
      setSelectedImage(e.target.result);
    };
  };

  const clearFields = () => {
    setPetName('');
    setSelectedImage('');
  };

  const addPetHandler = () => {
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
      const data = {
        name: petName,
        image: selectedImage,
      };
      dispatch(addPet(data));
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
          <button
            className='modal-button'
            onClick={addPetHandler}
          >
            Add Pet
          </button>
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
