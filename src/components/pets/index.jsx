import { useSelector } from 'react-redux';
import Pet from './pets-list/pet';
import './styles.scss';

const Pets = () => {
  const petInfo = useSelector((state) => state.petInfo.pet);
  return (
    <div className='pet-container'>
      {petInfo.map((pet, index) => {
        return (
          <Pet
            key={index}
            name={pet.name}
            image={pet.image}
            id={pet.id}
          />
        );
      })}
    </div>
  );
};

export default Pets;
