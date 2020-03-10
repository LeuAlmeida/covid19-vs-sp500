import React, { useState, useEffect } from 'react';

import api from '../../services/api';

import Card from '../../components/Card';
import { Container, CardContainer, Wrapper } from './styles';

function Home() {
  const [deaths, setDeaths] = useState({});
  const [confirmed, setConfirmed] = useState({});
  const [recovered, setRecovered] = useState({});

  useEffect(() => {
    async function loadDeaths() {
      const response = await api.get('/deaths');

      setDeaths(response.data);
    }

    async function loadCases() {
      const response = await api.get('/confirmed');

      setConfirmed(response.data);
    }

    async function loadRecovered() {
      const response = await api.get('/recovered');

      setRecovered(response.data);
    }

    loadDeaths();
    loadRecovered();
    loadCases();
  }, []);

  console.log(deaths);

  return (
    <Container>
      <CardContainer>
        <Card title="Mortos" quantity={deaths.latest} />
        <Card title="Confirmados" quantity={confirmed.latest} />
        <Card title="Recuperados" quantity={recovered.latest} />
      </CardContainer>
      <Wrapper>
        <h1>COVID-19 vs S&P500 Index</h1>
        <p>{deaths.latest}</p>
      </Wrapper>
    </Container>
  );
}

export default Home;
