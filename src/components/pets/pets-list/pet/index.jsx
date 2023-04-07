import Card from './../../../Card';
import { Link } from 'react-router-dom';

const Pet = ({ name, image, id }) => {
  return (
    <Card>
      <Link to={id}>
        <div className='pet-card'>
          <h3>{name.toUpperCase()}</h3>
          <img
            src={image}
            width={200}
            alt=''
          />
        </div>
      </Link>
    </Card>
  );
};

export default Pet;
