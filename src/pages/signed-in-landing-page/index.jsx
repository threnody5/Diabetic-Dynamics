import React from 'react';
import PetsList from '../../components/pets/pets-list';

/**
 * Represents the landing page displayed after a user has successfully signed in.
 * Renders a list of pets associated with the user's account.
 */
class SignedInLandingPage extends React.Component {
  render() {
    return <PetsList />;
  }
}

export default SignedInLandingPage;
