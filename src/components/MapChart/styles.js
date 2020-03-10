import styled from 'styled-components';

import { Marker } from 'react-simple-maps';

export const Marked = styled(Marker)`
  text {
    visibility: hidden;
    transition: visibility 0.3s;
    z-index: 2000;
    font-size: 12px;
    font-weight: bold;
    text-transform: uppercase;
  }

  circle {
    z-index: 1000;
    cursor: pointer;
  }

  &:hover {
    text {
      visibility: visible;
    }
  }
`;
