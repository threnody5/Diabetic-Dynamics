import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import SignOut from '../sign-out';
import SelectedPetCard from '../selected-pet-card';
import { useDispatch } from 'react-redux';
import { setPetID } from '../../util/redux/petIDSlice';
import './styles.scss';

/**
 * Displays the navigation bar, with navigation links.
 * @returns
 * - If the user is not signed in, displays the sign-in, sign-up buttons.
 * - If the user is signed, displays the sign-out button.
 */
export default function Navigation() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const loggedInStatus = useSelector((state) => state.loggedInStatus.loggedIn);

  // Returns a container that displays the title of the webpage.
  return (
    <div className='container'>
      <span className='webpage-name'>Diabetic Dynamics</span>
      {/* If the user is logged in, displays a button to navigate the user
          to the list of pets they've added, and a button for the user to
          of their account.
      */}
      {loggedInStatus ? (
        <>
          <SelectedPetCard />
          <button
            className='button-pets-list'
            onClick={() => {
              navigate('pets-list');
              dispatch(setPetID(null));
            }}
          >
            Pets List
          </button>
          <SignOut />
        </>
      ) : (
        <>
          {/* If the user is not signed in, buttons to navigate the user to the 
            sign in page, and sign up page are provided.
        */}
          <button
            className='button-sign-in'
            onClick={() => navigate('sign-in')}
          >
            Sign-In
          </button>
          <button
            className='button-sign-up'
            onClick={() => navigate('sign-up')}
          >
            Sign Up
          </button>
        </>
      )}
    </div>
  );
}
