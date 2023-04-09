import AddPet from '../add-pet';
import { useState } from 'react';
import './styles.scss';

/**
 * Controls the modal overlay for adding a new pet for the user.
 * @returns
 * Returns a button for the user, toggling the modal overlay.
 */
const AddPetButton = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className='add-pet-button-container'>
      <button
        className='add-pet-button'
        onClick={() => setShowModal(true)}
      >
        Add a new pet
      </button>
      <AddPet
        onClose={() => setShowModal(false)}
        show={showModal}
      />
    </div>
  );
};

export default AddPetButton;
