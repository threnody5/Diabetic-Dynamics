import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import SignOut from '../sign-out';
import './styles.scss';

export default function Navigation() {
  const loggedInStatus = useSelector((state) => state.loggedInStatus.loggedIn);

  return (
    <div className='container'>
      <span className='webpage-name'>Diabetic Dynamics</span>
      <span className='button-container'>
        {loggedInStatus ? (
          <SignOut />
        ) : (
          <>
            <button className='button-sign-in'>
              <NavLink to='sign-in'>Sign-In</NavLink>
            </button>
            <button className='button-sign-up'>
              <NavLink to='sign-up'>Sign Up</NavLink>
            </button>
          </>
        )}
      </span>
    </div>
  );
}
