import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  align-items: center;
  justify-content: center;
  max-width: 900px;
  margin-bottom: 20px;
  margin-top: 20px;
`;

export const IndividualCard = styled.div`
  display: flex;
  width: 295px;
  height: 40px;
  background: #fff;
  border-radius: 4px;
  align-items: center;
  justify-content: center;

  & + div {
    margin-left: 10px;
  }

  h3 {
  }

  span {
    color: #333;
    align-self: center;
    justify-self: center;
  }
`;
