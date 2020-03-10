import React from 'react';

import { Container, IndividualCard } from './styles';

export default function Card() {
  return (
    <Container>
      <IndividualCard>
        <span>Teste</span>
      </IndividualCard>
      <IndividualCard>
        <span>Teste</span>
      </IndividualCard>
      <IndividualCard>
        <span>Teste</span>
      </IndividualCard>
    </Container>
  );
}
