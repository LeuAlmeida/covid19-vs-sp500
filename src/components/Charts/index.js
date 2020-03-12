import React, { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';

import { Container } from './styles';

function Charts({
  coronaData = [65, 59, 80, 81, 56, 55, 40],
  sp500Data = [65, 59, 12, 22, 95, 40, 55],
}) {
  const [corona, setCorona] = useState([]);

  // console.log(coronaData[0], coronaData[1], coronaData[2]);

  const lineData = {
    labels: ['January', 'February', 'March'],
    datasets: [
      {
        label: 'Coronavirus cases',
        fill: false,
        lineTension: 0.1,
        backgroundColor: '#750609',
        borderColor: '#b31217',
        borderCapStyle: 'butt',
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: 'miter',
        pointBorderColor: '#b31217',
        pointBackgroundColor: '#fff',
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: '#b31217',
        pointHoverBorderColor: 'rgba(220,220,220,1)',
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: [coronaData[0], coronaData[1], coronaData[2]],
      },
      {
        label: 'S&P 500 Index',
        fill: false,
        lineTension: 0.1,
        backgroundColor: 'rgba(75,192,192,0.4)',
        borderColor: 'rgba(75,192,192,1)',
        borderCapStyle: 'butt',
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: 'miter',
        pointBorderColor: 'rgba(75,192,192,1)',
        pointBackgroundColor: '#fff',
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: 'rgba(75,192,192,1)',
        pointHoverBorderColor: 'rgba(220,220,220,1)',
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: sp500Data,
      },
    ],
  };

  if (coronaData) {
    return (
      <Container>
        <h4>COVID-19 vs S&P500</h4>
        <Line height="100" data={lineData} />
      </Container>
    );
  }

  return (
    <Container>
      <h4>COVID-19 vs S&P500</h4>
      Carregando...
    </Container>
  );
}

export default Charts;
