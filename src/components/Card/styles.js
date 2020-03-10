import styled, { css, keyframes } from 'styled-components';

import death from '../../assets/img/death.jpg';
import recovered from '../../assets/img/recovered.jpg';
import confirmed from '../../assets/img/confirmed.jpg';

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const IndividualCard = styled.div`
  display: flex;
  cursor: pointer;
  flex-direction: column;
  width: 295px;
  padding: 10px 0;
  min-height: 80px;
  box-shadow: inset 0px -1px 20px 20px #00000085;

  span {
    align-self: center;
    justify-self: center;
    font-size: 30px;
  }

  h3 {
    margin-bottom: 5px;
    font-weight: bold;
    text-transform: uppercase;
  }

  ${props =>
    props.loading &&
    css`
      svg {
        animation: ${rotate} 2s linear infinite;
      }
    `}

  ${props =>
    props.title === 'Mortos' &&
    css`
      background-image: url(${death});
      -webkit-background-size: cover;
      -moz-background-size: cover;
      -o-background-size: cover;
      background-size: cover;
      background-position-y: center;

      h3 {
        color: #fff;
      }

      span {
        color: #fff;
      }
    `}

  ${props =>
    props.title === 'Confirmados' &&
    css`
      background-image: url(${confirmed});
      -webkit-background-size: cover;
      -moz-background-size: cover;
      -o-background-size: cover;
      background-size: cover;
      background-position-y: center;

      h3 {
        color: #fff;
        margin-bottom: 5px;
      }

      span {
        color: #cdcdcd;
      }
    `}

  ${props =>
    props.title === 'Recuperados' &&
    css`
      background-image: url(${recovered});
      -webkit-background-size: cover;
      -moz-background-size: cover;
      -o-background-size: cover;
      background-size: cover;
      background-position-y: center;

      h3 {
        color: #fff;
        margin-bottom: 5px;
      }

      span {
        color: #cdcdcd;
      }
    `}

  border-radius: 4px;
  align-items: center;
  justify-content: center;

  & + div {
    margin-left: 10px;
  }
`;
