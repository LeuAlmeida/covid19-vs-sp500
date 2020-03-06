import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  background: #fff;
  max-height: 90px;
  align-items: center;
  justify-content: center;
  padding: 5px;
  margin-bottom: 10px;
`;

export const Nav = styled.nav`
  max-width: 800px;
  display: flex;
  flex: 1;
`;

export const Logo = styled.div`
  img {
    width: 50px;
    height: 50px;
  }
`;

export const NavItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  flex: 1;

  a {
    font-weight: bold;
    color: #333;
    margin: 0 10px;
    transition: color 0.2s;
    text-transform: uppercase;

    &:hover {
      color: #b31217;
    }
  }
`;
