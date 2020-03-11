/* eslint-disable guard-for-in */
/* eslint-disable no-restricted-syntax */

import React, { useState, useEffect } from 'react';
import { format, getMonth } from 'date-fns';
import pt from 'date-fns/locale/pt';

import { Container, Wrapper } from './styles';

import api from '../../../services/api';

import Charts from '../../../components/Charts';

export default function SP500() {
  const [coronaData, setCoronaData] = useState([]);
  const [sp500Data, setSp500Data] = useState([]);
  const [teste, setTeste] = useState([]);

  const monthNames = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];

  const data = [];

  // function getOwnPropertyNames(name) {
  //   return Object.getOwnPropertyNames(name);
  // }

  // function getOwnPropertyContent(name) {
  //   return Object.getOwnPropertyContent(name);
  // }

  useEffect(() => {
    async function loadCorona() {
      const response = await api.get('/all');

      const { locations } = response.data.confirmed;

      const history = locations.map(loc => loc.history);

      let key;

      history.forEach(hist => {
        for (key in hist) {
          data.push({
            [format(new Date(key), 'MMMM')]: hist[key],
          });
        }
      });

      // const map = data.map(item => ({
      //   [Object.getOwnPropertyNames(item)]: {
      //     count: Object.values(item).map(i => i),
      //   },
      // }));

      setTeste(data);
    }

    loadCorona();
  }, []);

  console.log(teste);
  // console.log(teste.map(t => Object.getOwnPropertyNames(t)));

  return (
    <Container>
      <Wrapper>
        {/* <Charts /> */}
        <Charts coronaData={coronaData} sp500Data={sp500Data} />
      </Wrapper>
    </Container>
  );
}
