import React from 'react';
import Navigation from './../../components/navigation';
import { Outlet } from 'react-router-dom';
import './styles.scss';

class LandingPage extends React.Component {
  render() {
    return (
      <>
        <div>
          <Navigation />
        </div>
        <Outlet />
      </>
    );
  }
}

export default LandingPage;
