import { authentication } from './../../api/FirebaseConfig';
import { signOut } from 'firebase/auth';
import './styles.scss';

/**
 * Component for handling the sign-out functionality for the user.
 * Dispatches the logOut action to update the logged-in status.
 * Firebase signOut method is used to sign the user out of the application.
 * @returns
 * A button that triggers the sign-out handler.
 */
const SignOut = () => {
  /**
   * Handler function for the sign-out process.
   * Call made to Firebase Auth API to sign the user out.
   * If an error is returned, it is logged in the console.
   */
  const signOutHandler = () => {
    signOut(authentication)
      .then(() => {})
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
