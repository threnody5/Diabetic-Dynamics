import './styles.scss';

const Modal = () => {
  return (
    <div className='modal-container'>
      <div className='modal-content'>
        <div className='modal-header'>
          <h4 className='modal-title'>Modal Title</h4>
        </div>
        <div className='modal-body'>This is the modal content.</div>
        <div className='button'>
          <button>Add Pet</button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
