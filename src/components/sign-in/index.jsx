import React, { useState } from 'react';
import Card from '../card';
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
    // Prevents default browser behavior with the form submission.
    e.preventDefault();

    // Empty array for the validation messages.
    const validate = [];

    // Regular expression set to a variable, to match against the entered email address.
    const emailFormat = new RegExp(
      /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/
    );

    // Check if the email address is valid.
    if (!emailAddress.match(emailFormat)) {
      validate.push('Please enter a valid email address.');
    }

    // If the validate array is empty, the user is logged in with the credentials they provided.
    if (validate.length === 0) {
      signInWithEmailAndPassword(authentication, emailAddress, password)
        .then((userCredentials) => {
          // User has been signed in.
        })

        // If there are any errors from Firebase, the error is added to the validate array, and set to the errorMessages state.
        .catch((err) => {
          const errorMessage = err.message;
          validate.push(errorMessage);
          setErrorMessages(validate);
        });
    } else {
      // If there were no errors with Firebase authentication, validate is set to errorMessages from email address validation.
      setErrorMessages(validate);
    }
  };

  return (
    <Card>
      {/* If the user is not logged in, the sign in form is provided */}
      {!loggedInStatus ? (
        <form className='sign-in-container'>
          <h1 className='sign-in-text'>Sign In</h1>
          <div className='error-messages-container'>
            {/* If the errorMessages array has a length greater than 0, the error messages are displayed to the user */}
            {errorMessages.length > 0 && (
              <div>
                <h3>Invalid Data:</h3>
                <ul>
                  {/* If there are any error message from failed authentication, they are mapped through and
                displayed here as a list.
                   */}
                  {errorMessages.map((error, index) => {
                    return <li key={index}>{error}</li>;
                  })}
                </ul>
              </div>
            )}
          </div>
          <div className='input-container'>
            <div>
              {/* Input field for the users email address */}
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
              {/* Input field for the users password */}
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
              {/* Button to sign the user in */}
              <button
                className='sign-in-account-button'
                onClick={(e) => logInHandler(e)}
              >
                Log In
              </button>
              {/* Link to navigate the user to the sign up page if they don't have an account set up */}
              <div className='sign-in-link'>
                Don't have an account? <Link to='/sign-up'>Sign Up</Link>
              </div>
              {/* Link to navigate the user to the home page */}
              <div className='home-link'>
                Click <Link to='/'>here</Link> to go back home
              </div>
            </div>
          </div>
        </form>
      ) : (
        // If the user is signed in, navigates them to the pets-list page.
        <Navigate to='/pets-list' />
      )}
    </Card>
  );
};

export default SignIn;
