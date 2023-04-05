import Card from '../../Card';

const Pet = ({ name, image }) => {
  return (
    <Card>
      <div className='pet-card'>
        <h3>{name.toUpperCase()}</h3>
        <img
          src={image}
          width={200}
          alt=''
        />
      </div>
    </Card>
  );
};

export default Pet;
