import Card from './../../../card';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setPetID } from '../../../../util/redux/petIDSlice';
import './styles.scss';

/**
 * Component that represents a single pet in the Pets component.
 * @param {object} name
 * @returns
 * - A Card with the Pets name, image, and ID.
 * - When the card is clicked, navigates the user to the PetInfo component with the pet ID as the URL parameter.
 */
const Pet = ({ name, image, id }) => {
  const dispatch = useDispatch();

  return (
    <Card>
      {/* name, image, and id props are passed into the Pet component,
          and each pet is wrapped in the Card component.
      */}
      <div className='pet-card'>
        <Link
          to={id}
          onClick={() => dispatch(setPetID(id))}
        >
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
