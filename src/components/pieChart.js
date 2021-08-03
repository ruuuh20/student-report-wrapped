import React from 'react';
import { Pie } from 'react-chartjs-2';

const data = {
  labels: ['Homework', 'Quizzes', 'Participation', 'In-class writing' ],
  datasets: [
    {
      label: '# of Votes',
      data: [13, 12, 8, 10,  ],
      backgroundColor: [
        'rgba(191, 192, 192, 0.2)', //gray
        'rgba(66, 129, 164, 0.2)', //blue
        'rgba(255, 206, 86, 0.2)', //yellow
        'rgba(254, 147, 140, 0.2)', //red

       
      ],
      borderColor: [
        'rgba(191, 192, 192, 1)',
        'rgba(66, 129, 164, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(254, 147, 140, 1)',
       
        
      ],
      borderWidth: 1,
    },
  ],
};

const PieChart = () => (
  <>
    <div class="chart-wrapper">
        <div className='header'>
          <h4 className='title'>Criteria</h4>
        
        </div>
        <Pie data={data} />
    </div>
  </>
);

export default PieChart;