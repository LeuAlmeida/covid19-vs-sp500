/* eslint-disable guard-for-in */
/* eslint-disable no-restricted-syntax */

import React, { useState, useEffect } from 'react';
import { format } from 'date-fns';
import pt from 'date-fns/locale/pt';

import { Container, Wrapper } from './styles';

import api from '../../../services/api';

import Charts from '../../../components/Charts';

export default function SP500() {
  const [coronaData, setCoronaData] = useState([]);
  // const [sp500Data, setSp500Data] = useState([]);

  useEffect(() => {
    async function loadCorona() {
      const response = await api.get('/all');

      const { locations } = response.data.confirmed;

      const history = locations.map(loc => loc.history);

      // console.log(locations);

      let key;

      let January = { cases: 0 };
      const February = { cases: 0 };
      const March = { cases: 0 };

      history.map(hist => {
        for (key in hist) {
          // if (format(new Date(key), 'MMMM') === 'January') {
          January = {
            [key]:
              January.cases +
              Number(hist[Object.keys(hist)[Object.keys(hist).length - 1]]),
          };
          // }
          // if (format(new Date(key), 'MMMM') === 'February') {
          //   February = {
          //     cases:
          //       January.cases +
          //       Number(hist[Object.keys(hist)[Object.keys(hist).length - 1]]),
          //   };
          // }
          // if (format(new Date(key), 'MMMM') === 'March') {
          //   March = {
          //     cases:
          //       January.cases +
          //       Number(hist[Object.keys(hist)[Object.keys(hist).length - 1]]),
          //   };
          // }
        }
      });

      console.log([January, February, March]);

      // history.forEach(hist => {
      //   for (key in hist) {
      //     if (format(new Date(key), 'MMMM') === 'January') {
      //       // January = {
      //       //   cases: January.cases + Number(hist[Object.keys(hist.pop())]),
      //       // };
      //       January = {
      //         cases:
      //           January.cases +
      //           Number(hist[Object.keys(hist)[Object.keys(hist).length - 1]]),
      //       };
      //     }

      //     console.log(history);
      //     // const data = hist.map(
      //     //   loc =>
      //     // {
      //     // [format(new Date(key), 'MMMM')]: loc.history[
      //     //   Object.keys(hist)[Object.keys(loc.history).length - 1]
      //     // ],

      //     // console.log(loc)
      //     // }
      //     // );
      //     // console.log(data);
      //     // data.map(item => {
      //     //   if (Object.getOwnPropertyNames(item) === 'January') {
      //     //     January = { case: January.cases + Number(hist[data]) }
      //     //   }
      //     // });
      //     // if (format(new Date(key), 'MMMM') === 'January') {
      //     //   // January = {
      //     //   //   cases: January.cases + Number(hist[Object.keys(hist.pop())]),
      //     //   // };
      //     //   January = { cases: January.cases + Number(hist[data]) };
      //     // }
      //     // } else if (format(new Date(key), 'MMMM') === 'February') {
      //     //   February = { cases: February.cases + Number(hist[key]) };
      //     // } else if (format(new Date(key), 'MMMM') === 'March') {
      //     //   March = { cases: March.cases + Number(hist[key]) };
      //     // } else {
      //     //   return null;
      //     // }
      //   }

      //   // console.log(January);

      //   setCoronaData([January.cases, February.cases, March.cases]);
      // });
    }

    loadCorona();
  }, []);

  return (
    <Container>
      <Wrapper>
        <Charts coronaData={coronaData} />
      </Wrapper>
    </Container>
  );
}
