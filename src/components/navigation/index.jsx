import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import SignOut from '../sign-out';
import './styles.scss';

/**
 * Displays the navigation bar, with navigation links.
 * @returns
 * - If the user is not signed in, displays the sign-in, sign-up buttons.
 * - If the user is signed, displays the sign-out button.
 */
export default function Navigation() {
  const navigate = useNavigate();
  const loggedInStatus = useSelector((state) => state.loggedInStatus.loggedIn);

  return (
    <div className='container'>
      <span className='webpage-name'>Diabetic Dynamics</span>
      <span className='button-container'>
        {loggedInStatus ? (
          <SignOut />
        ) : (
          <>
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
      </span>
    </div>
  );
}
