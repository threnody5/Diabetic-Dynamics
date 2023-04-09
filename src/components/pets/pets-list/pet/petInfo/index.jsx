import { useSelector } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Card from '../../../../Card';
import AddEntryButton from '../../../../add-entry-button';
import EntryList from '../../../../entry-list';
import './styles.scss';

const PetInfo = () => {
  const [petName, setPetName] = useState('');
  const [petImage, setPetImage] = useState('');
  const petID = useParams();
  const petInfo = useSelector((state) => state.petInfo.pet);
  const sugarConcentrationEntries = useSelector(
    (state) => state.sugarConcentration.sugarLevelData
  );
  const navigate = useNavigate();

  useEffect(() => {
    petInfo.forEach((pet) => {
      if (petID.id === pet.id) {
        setPetName(pet.name);
        setPetImage(pet.image);
      }
    });
    // eslint-disable-next-line
  }, []);

  const navigateHandler = () => {
    navigate('/pets-list');
  };
  return (
    <>
      <Card>
        <div className='selected-pet-card'>
          <div>
            <h3>{petName}</h3>
          </div>
          <div>
            <img
              src={petImage}
              width={200}
              alt=''
            />
          </div>
          <button
            className='go-back-button'
            onClick={navigateHandler}
          >
            Go back
          </button>
        </div>
      </Card>
      {sugarConcentrationEntries.length > 0 && <EntryList />}
      <AddEntryButton />
    </>
  );
};

export default PetInfo;