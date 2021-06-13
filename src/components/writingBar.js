import React from 'react';
import { Bar } from 'react-chartjs-2';

const data = {
  labels: ['Jan', 'Feb', 'March', 'April', 'May', 'June'],
  datasets: [
    {
      label: 'Average',
      data: [10, 12, 8, 12, 15, 18],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)',
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)',
      ],
      borderWidth: 1,
    },
  ],
};

const options = {
  scales: {
    yAxes: [
      {
        ticks: {
          beginAtZero: true,
        },
      },
    ],
  },
};

const WritingBar = () => (
  <>
    <div className='header'>
      <h4 className='title'>Your average went up</h4>
      
    </div>
    <Bar data={data}


	options={options} />
  </>
);

export default WritingBar;