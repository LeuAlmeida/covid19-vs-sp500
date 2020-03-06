import React from 'react';
import { Link } from 'react-router-dom';

import { Animated } from 'react-animated-css';

import { Container, Logo, Nav, NavItem } from './styles';

import logo from '../../assets/logo.svg';

export default function Header() {
  return (
    <Container>
      <Nav>
        <Logo>
          <Link to="/">
            <Animated
              animationIn="bounceInLeft"
              animationOut="fadeOut"
              isVisible
            >
              <img src={logo} alt="Logo" />
            </Animated>
          </Link>
        </Logo>
        <NavItem>
          <Animated
            animationIn="bounceInRight"
            animationOut="fadeOut"
            isVisible
          >
            <Link to="/stocks/sp500">S&P500</Link>
            <Link to="/stocks/ibov">Ibovespa</Link>
            <Link to="/stocks/ifix">IFIX</Link>
            <Link to="/stocks/nyse">NYSE</Link>
            <Link to="/stocks/nasdaq">NASDAQ</Link>
            <Link to="/stocks/gold">Gold</Link>
            <Link to="/stocks/usd">USD to BRL</Link>
          </Animated>
        </NavItem>
      </Nav>
    </Container>
  );
}
