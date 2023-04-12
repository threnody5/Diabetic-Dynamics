import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
} from 'recharts';
import { useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import './styles.scss';

const BloodCurveChart = () => {
  const [data, setData] = useState([]);
  const [averageBloodSugar, setAverageBloodSugar] = useState([]);
  const bloodSugarData = useSelector(
    (state) => state.sugarConcentration.sugarLevelData
  );

  useEffect(() => {
    const bloodSugarArray = [];
    const averageBloodSugarArray = [];
    bloodSugarData.forEach((data) => {
      bloodSugarArray.push({
        bloodSugar: parseFloat(data.sugarConcentration),
        date: data.date,
      });
      averageBloodSugarArray.push(parseInt(data.sugarConcentration));
    });
    const totalBloodSugar = averageBloodSugarArray.reduce(
      (accumulated, current) => accumulated + current,
      0
    );
    setData(bloodSugarArray);
    setAverageBloodSugar(
      (totalBloodSugar / averageBloodSugarArray.length).toFixed(1)
    );
  }, [bloodSugarData]);

  return (
    <div className='blood-curve-chart-container'>
      <h1>Blood-Glucose Curve</h1>
      <LineChart
        width={750}
        height={300}
        data={data}
      >
        <CartesianGrid></CartesianGrid>
        <XAxis dataKey='date'></XAxis>
        <YAxis></YAxis>
        <Tooltip></Tooltip>
        <Legend></Legend>
        <Line
          type='monotone'
          dataKey='bloodSugar'
          stroke='#288582'
        />
      </LineChart>
      <div className='blood-curve-chart-average'>
        Average Blood Sugar:{' '}
        <span style={{ color: averageBloodSugar > 6.7 ? 'red' : 'green' }}>
          {averageBloodSugar}
        </span>
      </div>
    </div>
  );
};

export default BloodCurveChart;
