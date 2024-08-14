import React from 'react';
import { Line } from 'react-chartjs-2';
import 'chart.js/auto';

const PriceChart = ({ data }) => {
  const chartData = {
    labels: data.map(d => d.timestamp),
    datasets: [
      {
        label: 'Price',
        data: data.map(d => d.price),
        borderColor: 'rgba(75,192,192,1)',
        backgroundColor: 'rgba(75,192,192,0.2)',
        fill: true,
      },
    ],
  };

  return (
    <div>
      <h2>Price Chart</h2>
      <Line data={chartData} />
    </div>
  );
};

export default PriceChart;
