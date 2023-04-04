import { authentication } from './../../api/FirebaseConfig';
import { signOut } from 'firebase/auth';
import { useDispatch, useSelector } from 'react-redux';
import { logOut } from '../../util/redux/logged-in-status';

const SignOut = () => {
  const loggedInStatus = useSelector((state) => state.loggedInStatus.loggedIn);
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
      <button onClick={signOutHandler}>Sign Out</button>
    </>
  );
};

export default SignOut;
