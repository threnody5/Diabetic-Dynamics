import './styles.scss';

const Modal = (props) => {
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
          <h4 className='modal-title'>Modal Title</h4>
        </div>
        <div className='modal-body'>This is the modal content.</div>
        <div className='modal-button-container'>
          <button className='modal-button'>Add Pet</button>
          <button
            className='modal-button'
            onClick={props.onClose}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
