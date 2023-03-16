/** @format */

import './styles.scss';

import { useState } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { NavLink } from 'react-router-dom';
import { authentication } from './../../FirebaseConfig';

/**
 * Sign in function for Firebase Authentication.
 * - Requires a valid email address.
 * - Requires a password with a length of 8 characters minimum.
 * - Requires both the password and re-entered password to match.
 */
export default function SignUp() {
  const [emailAddress, setEmailAddress] = useState('');
  const [password, setPassword] = useState('');
  const [reEnteredPassword, setReEnteredPassword] = useState('');

  /**
   * Arrow function that is invoked when the user clicks the Create Account button.
   * - If all checks are successful, creates a new account on Firebase for the user.
   * - If account creation fails, the user will be prompted with the error message.
   */
  const createAccount = () => {
    const emailFormat = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
    // Checks the entered email address against the email format Regular Expression.
    if (!emailAddress.match(emailFormat)) {
      window.alert('Please enter a valid email address');
      return;
    }
    // Checks the length of the password.
    if (password.length < 8) {
      window.alert(
        'Please enter a password with at least 8 characters'
      );
      return;
    }
    // Checks if both passwords match.
    if (password !== reEnteredPassword) {
      window.alert('Both passwords must match');
      return;
    }
    // If all checks are successful, creates a new account with the email and password provided.
    createUserWithEmailAndPassword(
      authentication,
      emailAddress,
      password
    )
      .then((userCredentials) => {
        const user = userCredentials.user;
        console.log(user);
        window.alert('Account created successfully!');
        setEmailAddress('');
        setPassword('');
        setReEnteredPassword('');
      })
      // If there was an error with account creation, prompts the user with the error message.
      .catch((err) => {
        const errorCode = err.code;
        window.alert(errorCode);
      });
  };

  return (
    <div className='sign-up-container'>
      <div>
        <div>
          <h1 className='sign-up-text'>Sign up</h1>
          <div>
            <label className='label-text'>
              Email Address:
              <div>
                <input
                  className='input-field'
                  type='email'
                  placeholder='email@example.com'
                  value={emailAddress}
                  onChange={(e) => {
                    setEmailAddress(e.target.value);
                  }}
                />
              </div>
            </label>
          </div>
          <div>
            <label className='label-text'>
              Password:
              <div>
                <input
                  className='input-field'
                  type='password'
                  placeholder='**********'
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                />
              </div>
            </label>
          </div>
          <div>
            <label className='label-text'>
              Re-enter Password:
              <div>
                <input
                  className='input-field'
                  type='password'
                  placeholder='**********'
                  value={reEnteredPassword}
                  onChange={(e) => {
                    setReEnteredPassword(e.target.value);
                  }}
                />
              </div>
            </label>
          </div>
          <div className='button-container'>
            <button className='home-button'>
              <NavLink
                className='link-text'
                to='/'
              >
                Back Home
              </NavLink>
            </button>
            <button
              className='create-account-button'
              onClick={() => createAccount()}
            >
              Create Account
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
