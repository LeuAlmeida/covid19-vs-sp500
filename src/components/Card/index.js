import React from 'react';
import PropTypes from 'prop-types';
import { FaSpinner } from 'react-icons/fa';

import { IndividualCard } from './styles';

export default function Card({ title, quantity, loading, onClick }) {
  return (
    <>
      <IndividualCard
        onClick={onClick}
        title={title}
        loading={loading.toString()}
      >
        <h3>{title}</h3>
        <span>{quantity || <FaSpinner size={28} color="#FFF" />}</span>
      </IndividualCard>
    </>
  );
}

Card.propTypes = {
  title: PropTypes.string,
  quantity: PropTypes.number,
  loading: PropTypes.bool,
  onClick: PropTypes.func,
};

Card.defaultProps = {
  title: 'Carregando',
  quantity: 0,
  loading: true,
  onClick: () => {},
};
