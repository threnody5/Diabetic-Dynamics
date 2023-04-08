import { useState, useEffect } from 'react';
import Card from '../Card';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import EntryItem from './entry-item';
import './styles.scss';

const EntryList = () => {
  const [dataList, setDataList] = useState([]);
  const petID = useParams();
  const sugarConcentrationEntries = useSelector(
    (state) => state.sugarConcentration.sugarLevelData
  );

  useEffect(() => {
    const matchingEntries = sugarConcentrationEntries.filter(
      (entry) => entry.id === petID.id
    );
    setDataList(matchingEntries);
  }, [sugarConcentrationEntries, petID.id]);

  if (dataList.length === 0) {
    return (
      <>
        <Card>
          <div>No Data</div>
        </Card>
      </>
    );
  }
  return (
    <>
      <Card>
        {dataList.map((data, index) => {
          return (
            <div
              //   className='entry-list-container'
              key={index}
            >
              <EntryItem data={data} />
            </div>
          );
        })}
      </Card>
    </>
  );
};

export default EntryList;
