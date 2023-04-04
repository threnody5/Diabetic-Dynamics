import React, { useState } from 'react';
import Modal from '../modal';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

const SignedInPage = () => {
  const [showModal, setShowModal] = useState(false);
  const loggedInStatus = useSelector((state) => state.loggedInStatus.loggedIn);
  return (
    <>
      {loggedInStatus ? (
        <>
          <button onClick={() => setShowModal(true)}>Add a new pet</button>
          <Modal
            onClose={() => setShowModal(false)}
            show={showModal}
          />
        </>
      ) : (
        <Navigate to='/' />
      )}
    </>
  );
};

export default SignedInPage;
