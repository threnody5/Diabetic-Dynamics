import Card from './../../../Card';
import { Link } from 'react-router-dom';
import './styles.scss';

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
