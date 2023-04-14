import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';
import { useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import './styles.scss';

/**
 * Component to display the entered blood sugar values in a chart.
 * @returns
 */
const BloodCurveChart = () => {
  const [data, setData] = useState([]);
  const [averageBloodSugar, setAverageBloodSugar] = useState([]);
  const bloodSugarData = useSelector(
    (state) => state.sugarConcentration.sugarLevelData
  );

  useEffect(() => {
    // Array to store the blood sugar value and dates.
    const bloodSugarArray = [];

    // Array to store all the blood sugar values.
    const averageBloodSugarArray = [];

    // Extracts the blood sugar values as a float and the date, adds them as an object to the bloodSugarArray array.
    bloodSugarData.forEach((data) => {
      bloodSugarArray.push({
        bloodSugar: parseFloat(data.sugarConcentration),
        date: data.date,
      });
      averageBloodSugarArray.push(parseInt(data.sugarConcentration));
    });

    // Adds all the blood sugar values together, and passes the value into the totalBloodSugar variable.
    const totalBloodSugar = averageBloodSugarArray.reduce(
      (accumulated, current) => accumulated + current,
      0
    );

    // Adds the bloodSugarArray to the data state, which is passed to the chart.
    setData(bloodSugarArray);

    // Average blood sugar is set by taking the totalBloodSugar, dividing it by the
    // number of items in the averageBloodSugarArray, and setting the decimal point to one.
    setAverageBloodSugar(
      (totalBloodSugar / averageBloodSugarArray.length).toFixed(1)
    );
  }, [bloodSugarData]);

  // Returns a chart component that displays a line chart of the blood sugar data, and average blood sugar.
  return (
    <div className='blood-curve-chart-container'>
      <h1>Blood-Glucose Curve</h1>
      {/* The ResponsiveContainer makes the chart responsive to the screen size */}
      <ResponsiveContainer
        className='blood-curve-chart'
        width='100%'
        height={400}
      >
        {/* LineChart is to display the line chart with the data provided from the bloodSugarArray */}
        <LineChart data={data}>
          {/* CartesianGrid is used to display the grid lines in the chart */}
          <CartesianGrid />
          {/* XAxis is used to display the x-axis of the chart with the dates */}
          <XAxis dataKey='date' />
          {/* YAxis is used to display the charts y-axis */}
          <YAxis />
          {/* The Tooltip component is used to display information about the data points when the user hovers over them.*/}
          <Tooltip />
          {/* The Legend component displays the legend for the chart */}
          <Legend />
          {/* The Line component is used to display the actual line for the chart, using the blood sugar data */}
          <Line
            type='monotone'
            dataKey='bloodSugar'
            stroke='#288582'
          />
        </LineChart>
      </ResponsiveContainer>
      {/* The average blood sugar is displayed below the cart, with the color changing from green to red if
        value is greater than 6.7
      */}
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
