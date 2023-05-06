import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { onAuthStateChanged } from 'firebase/auth';
import {
  logIn,
  logOut,
  loadingAccountStatus,
} from '../redux/loggedInStatusSlice';
import { addUserID } from '../redux/userIDSlice';
import { authentication } from '../../api/FirebaseConfig';

/**
 * AuthState component is used to load the users ID from Firebase on app load.
 * - If the user ID exists in Firebase, logIn action sets loggedInStatus to true.
 * - User ID is set in redux state.
 * - If the user is not logged in on Firebase, logOut action sets loggedOutStatus to false
 * - User ID is set to null is redux state.
 */
export const AuthState = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    onAuthStateChanged(authentication, (user) => {
      dispatch(loadingAccountStatus());
      if (user) {
        dispatch(logIn());
        dispatch(addUserID(user.uid));
      } else {
        dispatch(logOut());
        dispatch(addUserID(null));
      }
    });
  }, [dispatch]);
};
