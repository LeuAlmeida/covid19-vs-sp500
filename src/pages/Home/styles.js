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
  flex-direction: row;
  width: 100%;
  align-items: center;
  justify-content: center;
  max-width: 900px;
  margin-bottom: 20px;
  margin-top: 20px;
`;

export const Wrapper = styled.div`
  width: 100%;
  max-width: 900px;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #fff;
  padding: 20px;
  border-radius: 5px;

  h1 {
    color: #b31217;
    margin-bottom: 20px;
  }

  p {
    color: #333;
  }
`;
