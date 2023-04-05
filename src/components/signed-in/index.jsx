import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import AddPetButton from '../add-pet-button';
import Pets from '../pets';
import './styles.scss';

const SignedIn = () => {
  const loggedInStatus = useSelector((state) => state.loggedInStatus.loggedIn);

  return (
    <>
      {loggedInStatus ? (
        <>
          <Pets />
          <div>
            <AddPetButton />
          </div>
        </>
      ) : (
        <Navigate to='/' />
      )}
    </>
  );
};

export default SignedIn;
