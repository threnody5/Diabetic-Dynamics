import React, { useState } from 'react';
import Card from '../Card';
import { Link, Navigate } from 'react-router-dom';
import { authentication } from './../../api/FirebaseConfig';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useSelector } from 'react-redux';
import './styles.scss';

/**
 * Component for handling user sign-in requests.
 * @returns
 * - If the email address and password are correct, the user will be redirected to to the pets-list page.
 * - If the email address and password are incorrect, the user will be informed of the errors.
 */
const SignIn = () => {
  const [emailAddress, setEmailAddress] = useState('test@test.com');
  const [password, setPassword] = useState('Temppassword1!');
  const [errorMessages, setErrorMessages] = useState([]);
  const loggedInStatus = useSelector((state) => state.loggedInStatus.loggedIn);

  /**
   * Handler function for when the user clicks the "Log In" button.
   * @param {*} e
   * - Event is passed in to prevent default browser behavior on the form submission.
   * - Email address and password are validate with checks.
   */
  const logInHandler = (e) => {
    e.preventDefault();
    const validate = [];

    // Check if the email address is valid.
    const emailFormat = new RegExp(
      /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/
    );

    if (!emailAddress.match(emailFormat)) {
      validate.push('Please enter a valid email address.');
    }
    if (validate.length === 0) {
      signInWithEmailAndPassword(authentication, emailAddress, password)
        .then((userCredentials) => {
          // User has been signed in.
        })
        .catch((err) => {
          // const errorMessage = err.message;
          // validate.push('An error has occurred. Please try again.');
          window.alert('Incorrect password, please try again.');
        });
    }
    setErrorMessages(validate);
  };
  return (
    <Card>
      {!loggedInStatus ? (
        <form className='sign-in-container'>
          <h1 className='sign-in-text'>Sign In</h1>
          <div className='error-messages-container'>
            {errorMessages.length > 0 && (
              <div>
                <h3>Invalid Data:</h3>
                <ul>
                  {errorMessages.map((error, index) => {
                    return <li key={index}>{error}</li>;
                  })}
                </ul>
              </div>
            )}
          </div>
          <div className='input-container'>
            <div>
              <label className='label-text'>
                Email Address:
                <div>
                  <input
                    className='input-field'
                    type='email'
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
                    value={password}
                    onChange={(e) => {
                      setPassword(e.target.value);
                    }}
                  />
                </div>
              </label>
            </div>
            <div className='button-container'>
              <button
                className='sign-in-account-button'
                onClick={(e) => logInHandler(e)}
              >
                Log In
              </button>
              <div className='sign-in-link'>
                Don't have an account? <Link to='/sign-up'>Sign Up</Link>
              </div>
              <div className='home-link'>
                Click <Link to='/'>here</Link> to go back home
              </div>
            </div>
          </div>
        </form>
      ) : (
        <Navigate to='/pets-list' />
      )}
    </Card>
  );
};

export default SignIn;
