import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import Card from '../Card';
import AddPet from '../add-a-pet';
import './styles.scss';

const SignedInPage = () => {
  const loggedInStatus = useSelector((state) => state.loggedInStatus.loggedIn);
  const petInfo = useSelector((state) => state.petInfo.pet);
  // let petArray;
  // if (petInfo.length > 0) {
  //   petArray = true;
  // }
  return (
    <>
      {loggedInStatus ? (
        <>
          <div className='pet-card-container'>
            {petInfo.map((pet, index) => {
              return (
                <Card key={index}>
                  <div
                    className='pet-card'
                    key={index}
                  >
                    <h3>{pet.name.toUpperCase()}</h3>
                    <img
                      src={pet.image}
                      width={200}
                      alt=''
                    />
                  </div>
                </Card>
              );
            })}
          </div>
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

export default SignedInPage;
