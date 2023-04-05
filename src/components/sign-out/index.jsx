import { authentication } from './../../api/FirebaseConfig';
import { signOut } from 'firebase/auth';
import { useDispatch } from 'react-redux';
import { logOut } from '../../util/redux/loggedInStatusSlice';
import './styles.scss';

const SignOut = () => {
  const dispatch = useDispatch();

  const signOutHandler = () => {
    signOut(authentication)
      .then(() => {
        console.log('User has been signed out', authentication);
        dispatch(logOut());
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
