import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import './styles.scss';

const SelectedPetCard = () => {
  const [petName, setPetName] = useState('');
  const [petImage, setPetImage] = useState('');
  const petInfo = useSelector((state) => state.petInfo.pet);
  const selectedPetID = useSelector((state) => state.selectedPetID.petID);

  useEffect(() => {
    petInfo.forEach((pet) => {
      if (selectedPetID === pet.id) {
        setPetName(pet.name);
        setPetImage(pet.image);
      }
    });
  });
  return (
    <>
      {selectedPetID ? (
        <div className='selected-pet-card'>
          <div>
            <h3>{petName.toUpperCase()}</h3>
          </div>
          <div>
            <img
              src={petImage}
              width={50}
              alt=''
            />
          </div>
        </div>
      ) : null}
    </>
  );
};

export default SelectedPetCard;
