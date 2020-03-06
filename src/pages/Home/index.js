import React, { useState, useEffect } from 'react';
import api from '../../services/api';
import { Container, Wrapper } from './styles';


function Home() {
  const [mortos, setMortos] = useState({})

  useEffect(() => {
    async function loadMortos() {
      const response = await api.get('/deaths');

      setMortos(response.data);
    }

    loadMortos();
  }, [])

    console.log(mortos)
    return (
      <Container>
      <Wrapper>
        <h1>COVID-19 vs S&P500 Index</h1>
        <p>
          {mortos.latest}
        </p>
      </Wrapper>
    </Container>
    );
  
}

export default Home;