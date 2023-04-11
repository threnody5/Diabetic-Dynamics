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
  const bloodSugarData = useSelector(
    (state) => state.sugarConcentration.sugarLevelData
  );

  useEffect(() => {
    const bloodSugarArray = [];
    bloodSugarData.forEach((data) => {
      bloodSugarArray.push({ bloodSugar: parseFloat(data.sugarConcentration) });
    });
    setData(bloodSugarArray);
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
        <XAxis dataKey='month'></XAxis>
        <YAxis></YAxis>
        <Tooltip></Tooltip>
        <Legend></Legend>
        <Line
          type='monotone'
          dataKey='bloodSugar'
          stroke='#288582'
        />
      </LineChart>
    </div>
  );
};

export default BloodCurveChart;
