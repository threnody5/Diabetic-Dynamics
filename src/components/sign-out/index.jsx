import { authentication } from './../../api/FirebaseConfig';
import { signOut } from 'firebase/auth';
import { useDispatch } from 'react-redux';
import { setPetID } from '../../util/redux/petIDSlice';
import './styles.scss';

/**
 * Component for handling the sign-out functionality for the user.
 * Dispatches the logOut action to update the logged-in status.
 * Firebase signOut method is used to sign the user out of the application.
 * @returns
 * A button that triggers the sign-out handler.
 */
const SignOut = () => {
  const dispatch = useDispatch();
  /**
   * Handler function for the sign-out process.
   * Call made to Firebase Auth API to sign the user out.
   * If an error is returned, it is logged in the console.
   */
  const signOutHandler = () => {
    signOut(authentication)
      .then(() => {
        dispatch(setPetID(null));
      })
      .catch((err) => {
        console.error(err);
      });
  };
  return (
    <>
      <button
        className='sign-out-button'
        onClick={signOutHandler}
      >
        Sign Out
      </button>
    </>
  );
};

export default SignOut;
