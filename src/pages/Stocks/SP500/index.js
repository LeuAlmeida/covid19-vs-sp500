import React, { useState, useEffect } from 'react';

import { Container, Wrapper } from './styles';

import Charts from '../../../components/Charts';

export default function SP500() {
  return (
    <Container>
      <Wrapper>
        <Charts />
      </Wrapper>
    </Container>
  );
}
