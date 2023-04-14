import { useState } from 'react';
import './styles.scss';

/**
 * Controls the modal overlay for whichever component is passed into it.
 * @returns
 * Returns a button for the user, toggling the modal overlay.
 */
function StickyButton({ title, onClick, Component }) {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className='sticky-button-container'>
      {/* When the button is clicked, showModal is set to true */}
      <button
        className='sticky-button'
        onClick={() => {
          onClick();
          setShowModal(true);
        }}
      >
        {title}
      </button>
      {Component && (
        // If a component is provided, it will be rendered in the modal.
        <Component
          onClose={() => setShowModal(false)}
          show={showModal}
        />
      )}
    </div>
  );
}

export default StickyButton;
