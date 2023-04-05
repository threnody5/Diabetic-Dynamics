import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import AddPet from '../add-a-pet';
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
            <AddPet />
          </div>
        </>
      ) : (
        <Navigate to='/' />
      )}
    </>
  );
};

export default SignedIn;
