import AddEntry from '../add-entry';
import { useState } from 'react';
import './styles.scss';

const AddEntryButton = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className='add-entry-button-container'>
      <button
        className='add-entry-button'
        onClick={() => setShowModal(true)}
      ></button>
      <AddEntry
        onClose={() => setShowModal(false)}
        show={showModal}
      />
    </div>
  );
};

export default AddEntryButton;
