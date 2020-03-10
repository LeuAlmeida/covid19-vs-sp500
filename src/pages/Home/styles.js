import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 900px;
  justify-content: center;
  margin: 0 auto;
`;

export const CardContainer = styled.div`
  display: flex;
  cursor: pointer;
  flex-direction: row;
  width: 100%;
  height: auto;
  align-items: center;
  justify-content: center;
  max-width: 900px;
  margin-bottom: 20px;
  margin-top: 20px;
`;

export const MapContainer = styled.section`
  width: 100%;
`;

export const Wrapper = styled.div`
  width: 100%;
  max-width: 900px;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* background: #fff; */
  padding: 20px;
  border-radius: 5px;
  margin-bottom: 30px;

  h1 {
    color: #fff;
    /* color: #b31217; */
    margin: 0 20px;
  }

  p {
    color: #333;
  }
`;
