import Card from './../../../Card';
import { Link } from 'react-router-dom';
import './styles.scss';

/**
 * Component that represents a single pet in the Pets component.
 * @param {object} name
 * @returns
 * - A Card with the Pets name, image, and ID.
 * - When the card is clicked, navigates the user to the PetInfo component with the pet ID as the URL parameter.
 */
const Pet = ({ name, image, id }) => {
  return (
    <Card>
      <div className='pet-card'>
        <Link to={id}>
          <h3>{name.toUpperCase()}</h3>
          <img
            src={image}
            width={200}
            alt=''
          />
        </Link>
      </div>
    </Card>
  );
};

export default Pet;
