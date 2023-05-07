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
    for (const pet of petInfo) {
      if (selectedPetID === pet.id) {
        setPetName(pet.name);
        setPetImage(pet.image);
        savePetInfoToStorage(pet.name, pet.image);
        break;
      }
    }
  }, [selectedPetID, petInfo]);

  useEffect(() => {
    // Loads the pet name and pet image from the local storage if the page is refreshed.
    const storedPetName = localStorage.getItem('petName');
    const storedPetImage = localStorage.getItem('petImage');

    // If stored pet name and image exist, set them to that petName and petImage state.
    if (storedPetName && storedPetImage) {
      setPetName(storedPetName);
      setPetImage(storedPetImage);
    }
  }, []);

  /**
   *  Stores the selected pet name and image in the browser's local storage, allowing the information to persist even if the page is refreshed.
   * @param {string} name - The name of the selected pet.
   * @param {string} image - The URL of the image associated with the selected pet.
   */
  const savePetInfoToStorage = (name, image) => {
    localStorage.setItem('petName', name);
    localStorage.setItem('petImage', image);
  };

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
