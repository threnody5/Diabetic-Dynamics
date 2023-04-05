import AddPetModal from '../add-pet-modal';
import { useState } from 'react';
import './styles.scss';

const AddPet = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className='add-pet-button-container'>
      <button
        className='add-pet-button'
        onClick={() => setShowModal(true)}
      >
        Add a new pet
      </button>
      <AddPetModal
        onClose={() => setShowModal(false)}
        show={showModal}
      />
    </div>
  );
};

export default AddPet;
