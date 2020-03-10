import React from 'react';
import PropTypes from 'prop-types';
import { FaSpinner } from 'react-icons/fa';

import { IndividualCard } from './styles';

export default function Card({ title, quantity, loading }) {
  return (
    <>
      <IndividualCard title={title} loading={loading}>
        <h3>{title}</h3>
        <span>{quantity || <FaSpinner size={28} color="#FFF" />}</span>
      </IndividualCard>
    </>
  );
}

Card.propTypes = {
  title: PropTypes.string,
  quantity: PropTypes.string,
  loading: PropTypes.bool,
};

Card.defaultProps = {
  title: 'Título do Card',
  quantity: 0,
  loading: true,
};
