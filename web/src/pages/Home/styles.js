import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  max-width: 900px;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  margin-top: 20px;
`;

export const Wrapper = styled.div`
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
