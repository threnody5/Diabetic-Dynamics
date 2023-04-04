import { useState } from 'react';
import './styles.scss';

const Modal = (props) => {
  const [petName, setPetName] = useState('');
  const [selectedImage, setSelectedImage] = useState('');

  if (!props.show) {
    return null;
  }

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
          <h4 className='modal-title'>Add a Pet</h4>
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
                  // ref={inputFile}
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
          <button className='modal-button'>Add Pet</button>
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
  );
};

export default Modal;
