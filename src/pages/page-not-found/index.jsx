import React from 'react';
import Card from './../../components/Card';
import { useNavigate } from 'react-router-dom';
import './styles.scss';

const PageNotFound = () => {
  const navigate = useNavigate();

  const navigateHandler = () => {
    navigate('/');
  };

  return (
    <>
      <Card>
        <div className='page-not-found-container'>
          <p>
            Oops! We're sorry, but the page you're looking for cannot be found.
            It may have been moved, deleted, or never existed in the first
            place. Please check the URL or use the navigation menu to find what
            you're looking for. If you continue to have trouble, please contact
            our support team for assistance.
          </p>
          <button onClick={navigateHandler}>Home</button>
        </div>
      </Card>
    </>
  );
};

export default PageNotFound;
