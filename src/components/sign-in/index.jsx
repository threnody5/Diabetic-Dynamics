import React from 'react';
import Card from '../Card';
import { Link } from 'react-router-dom';
import { authentication } from './../../api/FirebaseConfig';
import { signInWithEmailAndPassword } from 'firebase/auth';
import './styles.scss';

class SignIn extends React.Component {
  constructor() {
    super();
    this.state = {
      errorMessages: [],
      emailAddress: '',
      password: '',
    };
  }
  render() {
    const signInHandler = (e) => {
      const validate = [];

      // Check if the email address is valid.
    const emailFormat = new RegExp(
      /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/
    );

    if (!this.state.emailAddress.match(emailFormat)) {
      validate.push('Please enter a valid email address.');
    }
      e.preventDefault();
      if (validate.length > 0) {
        
      }
      signInWithEmailAndPassword(
        authentication,
        this.state.emailAddress,
        this.state.password
      )
        .then((userCredentials) => {
          // User has been signed in.
          const user = userCredentials.user;
          console.log(user);
        })
        .catch((err) => {
          const errorMessage = err.message;
          validate.push(errorMessage);
          console.error(errorMessage);
        });
    };
    return (
      <Card>
        <form className='log-in-container'>
          <h1 className='log-in-text'>Log In</h1>
          {/* <div className='error-messages-container'>
            {this.errorMessages.length > 0 && (
              <div>
                <h3>Invalid Data:</h3>
                <ul>
                  {this.errorMessages.map((error, index) => {
                    return <li key={index}>{error}</li>;
                  })}
                </ul>
              </div>
            )}
          </div> */}
          <div className='input-container'>
            <div>
              <label className='label-text'>
                Email Address:
                <div>
                  <input
                    className='input-field'
                    type='email'
                    value={this.emailAddress}
                    onChange={(e) => {
                      this.setState({ emailAddress: e.target.value });
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
                    value={this.password}
                    onChange={(e) => {
                      this.setState({ password: e.target.value });
                      // setPassword(e.target.value);
                    }}
                  />
                </div>
              </label>
            </div>
            <div className='button-container'>
              <button
                className='create-account-button'
                onClick={(e) => signInHandler(e)}
                // onClick={(e) => createAccount(e)}
              >
                Log In
              </button>
              <div className='sign-in-link'>
                Don't have an account?{' '}
                <Link to='/sign-up'>Sign In</Link>
              </div>
              <div className='home-link'>
                Click <Link to='/'>here</Link> to go back home
              </div>
            </div>
          </div>
        </form>
      </Card>
    );
  }
}

export default SignIn;
