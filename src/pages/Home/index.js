import React, { useState, useEffect } from 'react';

import api from '../../services/api';

import Card from '../../components/Card';
import MapChart from '../../components/MapChart';
import { Container, CardContainer, Wrapper, MapContainer } from './styles';

function Home() {
  const [deaths, setDeaths] = useState({});
  const [confirmed, setConfirmed] = useState({});
  const [recovered, setRecovered] = useState({});
  const [loading, setLoading] = useState(true);
  const [view, setView] = useState('confirmed');

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
        <Wrapper>
          {loading ? (
            <h1>...</h1>
          ) : (
            <h1>
              {view.toUpperCase()} CASES (
              {view === 'deaths' && <span>{deaths.latest}</span>}
              {view === 'confirmed' && <span>{confirmed.latest}</span>}
              {view === 'recovered' && <span>{recovered.latest}</span>})
            </h1>
          )}
        </Wrapper>
      </Container>
      <MapContainer>
        <MapChart view={view} />
      </MapContainer>
    </>
  );
}

export default Home;
