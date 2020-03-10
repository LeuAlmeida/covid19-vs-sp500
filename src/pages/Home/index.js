import React, { useState, useEffect } from 'react';

import api from '../../services/api';

import Card from '../../components/Card';
import MapChart from '../../components/MapChart';
import { Container, CardContainer, MapContainer } from './styles';

function Home() {
  const [deaths, setDeaths] = useState({});
  const [confirmed, setConfirmed] = useState({});
  const [recovered, setRecovered] = useState({});
  const [all, setAll] = useState({});
  const [loading, setLoading] = useState(true);
  const [view, setView] = useState('all');

  useEffect(() => {
    async function loadAll() {
      const response = await api.get('/all');

      setAll(response.data);
    }

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
    loadAll();
    setLoading(false);
  }, []);

  return (
    <>
      <Container>
        <CardContainer>
          <Card
            onClick={() => setView('deaths')}
            title="Deaths"
            quantity={deaths.latest}
            loading={loading}
          />
          <Card
            onClick={() => setView('confirmed')}
            title="Confirmed"
            quantity={confirmed.latest}
            loading={loading}
          />
          <Card
            onClick={() => setView('recovered')}
            title="Recovered"
            quantity={recovered.latest}
            loading={loading}
          />
        </CardContainer>
        {/* <Wrapper>
        <h1>COVID-19 vs S&P500 Index</h1>
      </Wrapper> */}
      </Container>
      <MapContainer>
        <MapChart />
      </MapContainer>
    </>
  );
}

export default Home;
