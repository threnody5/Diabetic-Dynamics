import { useSelector } from 'react-redux';
import Pet from './pet';

const Pets = () => {
  const petInfo = useSelector((state) => state.petInfo.pet);
  return (
    <div className='pet-card-container'>
      {petInfo.map((pet, index) => {
        return (
          <Pet
            key={index}
            name={pet.name}
            image={pet.image}
          />
        );
      })}
    </div>
  );
};

export default Pets;
