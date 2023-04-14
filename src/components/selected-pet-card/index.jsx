import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import './styles.scss';

/**
 * Component to render the selected pet in the navigation bar.
 * @returns
 */
const SelectedPetCard = () => {
  const [petName, setPetName] = useState('');
  const [petImage, setPetImage] = useState('');
  const petInfo = useSelector((state) => state.petInfo.pet);
  const selectedPetID = useSelector((state) => state.selectedPetID.petID);

  useEffect(() => {
    // Runs through the petInfo state, and compares it to the selectedPetID,
    // if a match is found, displays that pets name and image in the navigation bar.
    petInfo.forEach((pet) => {
      if (selectedPetID === pet.id) {
        setPetName(pet.name);
        setPetImage(pet.image);
      }
    });
  });
  return (
    <>
      {/* Conditionally rendered if the selectedPetID value is not null*/}
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
