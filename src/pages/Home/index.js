import React, { useState, useEffect } from 'react';

import api from '../../services/api';

import Card from '../../components/Card';
import { Container, Wrapper } from './styles';

function Home() {
  const [deaths, setDeaths] = useState({});

  useEffect(() => {
    async function loadDeaths() {
      const response = await api.get('/deaths');

      setDeaths(response.data);
    }

    loadDeaths();
  }, []);

  console.log(deaths);
  return (
    <Container>
      <Card>Teste</Card>
      <Wrapper>
        <h1>COVID-19 vs S&P500 Index</h1>
        <p>{deaths.latest}</p>
      </Wrapper>
    </Container>
  );
}

export default Home;
