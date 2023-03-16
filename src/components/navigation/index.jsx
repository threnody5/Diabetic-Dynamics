/** @format */

import './styles.scss';

import { NavLink } from 'react-router-dom';

export default function Navigation() {
  return (
    <div className='container'>
      <span className='webpage-name'>Diabetic Dynamics</span>
      <span className='button-container'>
        <button className='button-sign-in'>
          <NavLink
            // className='navigation-link-text'
            to='sign-in'
          >
            Sign-In
          </NavLink>
        </button>
        <button className='button-sign-up'>
          <NavLink
            // className='navigation-link-text'
            to='sign-up'
          >
            Sign Up
          </NavLink>
        </button>
      </span>
    </div>
  );
}
