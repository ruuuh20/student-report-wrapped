import React from 'react';
import { Line } from 'react-chartjs-2';

const data = {
  labels: ['1', '2', '3', '4', '5', '6'],
  datasets: [
    {
      label: 'Class average',
      data: [82, 88, 84, 85, 91, 91],
      fill: false,
      backgroundColor: 'rgb(255, 99, 132)',
      borderColor: 'rgba(255, 99, 132, 0.2)',
      yAxisID: 'y-axis-1',
    },
    {
      label: 'John',
      data: [85, 87, 90, 84, 89, 92],
      fill: false,
      backgroundColor: 'rgb(54, 162, 235)',
      borderColor: 'rgba(54, 162, 235, 0.2)',
    //   yAxisID: 'y-axis-2',
    },
  ],
};

const options = {
  scales: {
 
    yAxes: [
      {
        type: 'line',
        display: false,
        position: 'left',
        id: 'y-axis-1',
        
      },
    //   {
    //     type: 'linear',
    //     display: false,
    //     position: 'right',
    //     id: 'y-axis-2',
    //     gridLines: {
    //       drawOnArea: false,
    //     },
    //   },
    ],
  },
};

const LineChart = () => (
  <>
    <div className="chart-wrapper">
    <Line data={data} options={options} /></div>
  </>
);

export default LineChart;