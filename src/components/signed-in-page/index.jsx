import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import AddPet from '../add-a-pet';

const SignedInPage = () => {
  const loggedInStatus = useSelector(
    (state) => state.loggedInStatus.loggedIn
  );
  return (
    <>
      {loggedInStatus ? (
        <>
          <AddPet />
        </>
      ) : (
        <Navigate to='/' />
      )}
    </>
  );
};

export default SignedInPage;
