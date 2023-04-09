import { useState, useEffect } from 'react';
import Card from '../Card';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import EntryItem from './entry-item';
import './styles.scss';

/**
 * Displays a list of sugar concentration entries, that are filtered by the petID.
 * @returns
 * - If no entries are found, returns a message of "No Data".
 * - Otherwise, returns the list of sugar concentration entries for the user.
 */
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

  // If dataList array is empty, displays a "No Data" message to the user.
  if (dataList.length === 0) {
    return (
      <>
        <Card>
          <div>No Data</div>
        </Card>
      </>
    );
  }
  // If dataList is not empty, displays a list of the entries to the user.
  return (
    <>
      <Card>
        {dataList.map((data, index) => {
          return (
            <div key={index}>
              <EntryItem data={data} />
            </div>
          );
        })}
      </Card>
    </>
  );
};

export default EntryList;
