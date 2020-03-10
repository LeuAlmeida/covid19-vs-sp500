import React from 'react';

import { IndividualCard } from './styles';

export default function Card({ title, quantity, loading }) {
  return (
    <>
      <IndividualCard title={title} loading={loading}>
        <h3>{title}</h3>
        <span>{quantity}</span>
      </IndividualCard>
    </>
  );
}
