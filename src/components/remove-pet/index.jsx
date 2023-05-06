import { useSelector, useDispatch } from 'react-redux';
import * as database from './../../api';
import { useNavigate } from 'react-router-dom';
import { setPetID } from '../../util/redux/petIDSlice';
import './styles.scss';

const RemovePet = ({ petID }) => {
  const userID = useSelector((state) => state.userID.id);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const removePetHandler = () => {
    const verification = window.prompt(
      'Are you sure you want to remove this pet from your account? \n Type in Yes to remove.'
    );
    console.log('Verification:', verification);
    if (verification === 'Yes') {
      database.removePetFromDatabase(userID, petID);
      // TODO: Remove this second window alert and add an overlay
      window.alert('Pet has been successfully removed');
      navigate('/pets-list');
      dispatch(setPetID(null));
    }
  };
  return (
    <div className='remove-pet-button-container'>
      <button
        className='remove-pet-button'
        onClick={removePetHandler}
      >
        Remove Pet
      </button>
    </div>
  );
};

export default RemovePet;
