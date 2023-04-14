import { useState, useEffect } from 'react';
import Card from '../card';
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
    // Checks if the entry.id matches the petID.id, and stores those matches in the variable.
    const matchingEntries = sugarConcentrationEntries.filter(
      (entry) => entry.id === petID.id
    );

    // Sets the matchingEntries to the dataList state.
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
        <div className='entry-list-container'>
          {/* The entries are displayed using the dataList array */}
          {dataList.map((data, index) => {
            return (
              <div
                className='entry-list-item'
                key={index}
              >
                <EntryItem data={data} />
              </div>
            );
          })}
        </div>
      </Card>
    </>
  );
};

export default EntryList;
