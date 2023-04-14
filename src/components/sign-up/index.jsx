import { useState } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { Link } from 'react-router-dom';
import { authentication } from './../../api/FirebaseConfig';
import Card from '../card';
import './styles.scss';

/**
 * Sign in function for Firebase Authentication.
 * - Requires a valid email address.
 * - Requires a password with a length of 8 characters minimum.
 * - Requires both the password and re-entered password to match.
 */
export default function SignUp() {
  const [emailAddress, setEmailAddress] = useState('test2@test.com');
  const [password, setPassword] = useState('Temppassword1!');
  const [reEnteredPassword, setReEnteredPassword] = useState('');
  const [errorMessages, setErrorMessages] = useState([]);

  /**
   * Function that is invoked when the user clicks the Create Account button.
   * @param {*} e
   * - Event is passed in to prevent default browser behavior on the form submission.
   * @returns
   * - If all checks are successful, creates a new account on Firebase for the user.
   * - If account creation fails, the user will be prompted with the error message.
   */
  const createAccount = (e) => {
    // Prevents default browser behavior with the form submission.
    e.preventDefault();

    // Empty array for the validation messages.
    const validate = [];

    // Check if the email address is valid.
    const emailFormat = new RegExp(
      /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/
    );

    // Check if the password meets all the requirements for a strong password.
    const passwordStrength = new RegExp(
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/
    );
    // Checks the entered email address against the email format Regular Expression.
    if (!emailAddress.match(emailFormat)) {
      validate.push('Please enter a valid email address.');
    }
    // Checks the length of the password.
    if (!password.match(passwordStrength)) {
      validate.push(
        'Please enter a valid password that is 8 characters or longer, includes an upper case letter, number, and special character.'
      );
    }
    // Checks if both passwords match.
    if (password !== reEnteredPassword) {
      validate.push('Both passwords must match.');
    }

    setErrorMessages(validate);
    if (validate.length === 0) {
      setErrorMessages([]);
      // If all checks are successful, creates a new account with the email and password provided.
      createUserWithEmailAndPassword(authentication, emailAddress, password)
        .then(() => {
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
      return;
    }
  };

  return (
    <Card>
      <form className='sign-up-container'>
        <h1 className='sign-up-text'>Sign up</h1>
        <div className='error-messages-container'>
          {/* Error Messages when the entered information doesn't pass the checks. */}
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
            {/* Form for input of email address. */}
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
            {/* Form for input of password. */}
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
          <div>
            {/* Form for input of re-entered password. */}
            <label className='label-text'>
              Re-enter Password:
              <div>
                <input
                  className='input-field'
                  type='password'
                  value={reEnteredPassword}
                  onChange={(e) => {
                    setReEnteredPassword(e.target.value);
                  }}
                />
              </div>
            </label>
          </div>
          <div className='button-container'>
            {/* Buttons which handles the creation of the account for the user. */}
            <button
              className='create-account-button'
              onClick={(e) => createAccount(e)}
            >
              Create Account
            </button>
            {/* Link for the user to navigate to the sign in page.  */}
            <div className='sign-in-link'>
              Already have an account? <Link to='/sign-in'>Sign In</Link>
            </div>
            {/* Link for the user to navigate to the home page. */}
            <div className='home-link'>
              Click <Link to='/'>here</Link> to go back home
            </div>
          </div>
        </div>
      </form>
    </Card>
  );
}
