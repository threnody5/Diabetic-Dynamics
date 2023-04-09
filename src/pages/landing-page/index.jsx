import React from 'react';
// import Navigation from './../../components/navigation';
import { Outlet } from 'react-router-dom';
import './styles.scss';

/**
 * LandingPage serves as a container for rendering the child components specified in the routing configuration.
 */
class LandingPage extends React.Component {
  render() {
    return (
      <>
        <Outlet />
      </>
    );
  }
}

export default LandingPage;
