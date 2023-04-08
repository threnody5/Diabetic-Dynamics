import './styles.scss';

const EntryItem = ({ data }) => {
  return (
    <div className='entry-list-container'>
      <div className='entry-list-items'>
        <div>{data.date}</div>
        <div>{data.time}</div>
        <div>{data.measured}</div>
        <div>{data.sugarConcentration} mmol/L</div>
      </div>
    </div>
  );
};

export default EntryItem;
