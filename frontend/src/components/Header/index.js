import React from 'react';
import { Link } from 'react-router-dom';
import logoImg from '../../assets/logo.svg';

import { Container } from './styles';

const Header = () => (
  <Container>
    <Link to="/">
      <img src={logoImg} alt="Eu" />

      <h1>Amigo Secreto</h1>
    </Link>
  </Container>
);

export default Header;
