import AddEntry from '../add-entry';
import { useState } from 'react';
import './styles.scss';

/**
 * Controls the modal overlay for adding a new entry for the user.
 * @returns
 * Returns a button for the user, toggling the modal overlay.
 */
const AddEntryButton = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className='add-entry-button-container'>
      <button
        className='add-entry-button'
        onClick={() => setShowModal(true)}
      >
        Add New Entry
      </button>
      <AddEntry
        onClose={() => setShowModal(false)}
        show={showModal}
      />
    </div>
  );
};

export default AddEntryButton;
