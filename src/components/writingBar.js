import React from 'react';
import { Bar } from 'react-chartjs-2';

const data = {
  labels: ['Jan', 'Feb', 'March', 'April', ],
  datasets: [
    {
      label: 'Average',
      data: [ 75, 84, 88, 92],
      backgroundColor: [
       
       
        'rgba(224, 122, 95, 0.6)',
        
        'rgba(61, 64, 91, .6)',
        'rgba(129, 178, 154, 0.6)',
        'rgba(242, 204, 143, 0.6)',
      ],
      borderColor: [
  
        'rgba(224, 122, 95, 1)',
        'rgba(61, 64, 91, 1)',
        'rgba(129, 178, 154, 1)',
        'rgba(242, 204, 143, 1)',
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
          stepSize: 20,
          min: 20
        },
      },
    ],
  },
};

const WritingBar = () => (
  <>
    <div className='header'>
      <h4 className='chart-headline'>Your average went up from last time</h4>
      
    </div>
    <div className="chart-wrapper">
      <Bar data={data}
        options={options} />
    </div>
  </>
);

export default WritingBar;