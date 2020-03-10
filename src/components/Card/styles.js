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

export const IndividualCard = styled.button`
  display: flex;
  z-index: 999999;
  cursor: pointer;
  border: 0;
  flex-direction: column;
  width: 295px;
  padding: 10px 0;
  min-height: 80px;
  box-shadow: inset 0px -1px 20px 20px #00000085;

  span {
    align-self: center;
    justify-self: center;
    font-size: 30px;
    cursor: pointer;
    color: #FFF;
  }

  h3 {
    margin-bottom: 5px;
    font-weight: bold;
    text-transform: uppercase;
  }

  svg {
    animation: ${rotate} 2s linear infinite;
  }

  ${props =>
    props.title === 'Deaths' &&
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
    `}

  ${props =>
    props.title === 'Confirmed' &&
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
    `}

  ${props =>
    props.title === 'Recovered' &&
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
    `}

  border-radius: 4px;
  align-items: center;
  justify-content: center;

  & + button {
    margin-left: 10px;
  }
`;
