import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { onAuthStateChanged } from 'firebase/auth';
import { logIn, logOut } from '../redux/loggedInStatusSlice';
import { authentication } from '../../api/FirebaseConfig';

export const AuthState = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    onAuthStateChanged(authentication, (user) => {
      if (user) {
        dispatch(logIn(true));
      } else {
        dispatch(logOut(false));
      }
    });
  }, [dispatch]);
};
