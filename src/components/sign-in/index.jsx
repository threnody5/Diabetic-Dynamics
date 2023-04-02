import React from 'react';
import Card from '../Card';
import { Link, Navigate } from 'react-router-dom';
import { authentication } from './../../api/FirebaseConfig';
import { signInWithEmailAndPassword } from 'firebase/auth';
import './styles.scss';

class SignIn extends React.Component {
  constructor() {
    super();
    this.state = {
      errorMessages: [],
      emailAddress: 'test5@test.com',
      password: 'Temppassword1!',
      loggedIn: false,
    };
  }
  render() {
    const logInHandler = (e) => {
      e.preventDefault();
      const validate = [];

      // Check if the email address is valid.
      const emailFormat = new RegExp(
        /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/
      );

      if (!this.state.emailAddress.match(emailFormat)) {
        validate.push('Please enter a valid email address.');
        console.log('email address error!');
      }
      if (validate.length > 0) {
        this.state.errorMessages.push(validate);
      }
      if (this.state.errorMessages.length === 0) {
        signInWithEmailAndPassword(
          authentication,
          this.state.emailAddress,
          this.state.password
        )
          .then((userCredentials) => {
            // User has been signed in.
            const user = userCredentials.user;
            console.log(user);
            this.setState({ loggedIn: true });
          })
          .catch((err) => {
            const errorMessage = err.message;
            validate.push(errorMessage);
            console.error(errorMessage);
          });
      }

      console.log(this.state.errorMessages);
    };
    return (
      <Card>
        {!this.state.loggedIn ? (
          <form className='log-in-container'>
            <h1 className='log-in-text'>Log In</h1>
            <div className='error-messages-container'>
              {this.state.errorMessages.length > 0 && (
                <div>
                  <h3>Invalid Data:</h3>
                  <ul>
                    {this.state.errorMessages.map((error, index) => {
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
                      value={this.state.emailAddress}
                      onChange={(e) => {
                        this.setState({
                          emailAddress: e.target.value,
                        });
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
                      value={this.state.password}
                      onChange={(e) => {
                        this.setState({ password: e.target.value });
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
                  Don't have an account?{' '}
                  <Link to='/sign-up'>Sign In</Link>
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
  }
}

export default SignIn;
