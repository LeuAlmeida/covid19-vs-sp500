import React from 'react';
import { Link } from 'react-router-dom';

import { Container, Logo, Nav, NavItem } from './styles';

import logo from '../../assets/logo.svg';

export default function Header() {
  return (
    <Container>
      <Nav>
        <Logo>
          <Link to="/">
            <img src={logo} alt="Logo" />
          </Link>
        </Logo>
        <NavItem>
          <Link to="/stocks/sp500">S&P500</Link>
          <Link to="/stocks/ibov">Ibovespa</Link>
          <Link to="/stocks/ifix">IFIX</Link>
          <Link to="/stocks/nyse">NYSE</Link>
          <Link to="/stocks/nasdaq">NASDAQ</Link>
          <Link to="/stocks/gold">Gold</Link>
          <Link to="/stocks/usd">USD to BRL</Link>
        </NavItem>
      </Nav>
    </Container>
  );
}
