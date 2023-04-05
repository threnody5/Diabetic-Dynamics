import AddPet from '../add-pet';
import { useState } from 'react';
import './styles.scss';

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
