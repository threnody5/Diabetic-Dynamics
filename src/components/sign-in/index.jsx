import React, { useState } from 'react';
import Card from '../Card';
import { Link, Navigate } from 'react-router-dom';
import { authentication } from './../../api/FirebaseConfig';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useDispatch, useSelector } from 'react-redux';
import { logIn } from './../../util/redux/logged-in-status';
import './styles.scss';

const SignIn = () => {
  const [emailAddress, setEmailAddress] = useState('test@test.com');
  const [password, setPassword] = useState('Temppassword1!');
  const [errorMessages, setErrorMessages] = useState([]);
  const dispatch = useDispatch();
  const loggedInStatus = useSelector((state) => state.loggedInStatus.loggedIn);

  console.log(loggedInStatus);

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
          // const user = userCredentials.user;
          dispatch(logIn());
        })
        .catch((err) => {
          // const errorMessage = err.message;
          // validate.push('An error has occurred. Please try again.');
          window.alert('Incorrect password, please try again.');
        });
    }
    console.log('Validate: ', validate);
    setErrorMessages(validate);
    console.log('Error Messages: ', errorMessages);
  };
  return (
    <Card>
      {!loggedInStatus ? (
        <form className='log-in-container'>
          <h1 className='log-in-text'>Log In</h1>
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
                className='create-account-button'
                onClick={(e) => logInHandler(e)}
              >
                Log In
              </button>
              <div className='sign-in-link'>
                Don't have an account? <Link to='/sign-up'>Sign In</Link>
              </div>
              <div className='home-link'>
                Click <Link to='/'>here</Link> to go back home
              </div>
            </div>
          </div>
        </form>
      ) : (
        <Navigate to='/signed-in' />
      )}
    </Card>
  );
};

export default SignIn;
