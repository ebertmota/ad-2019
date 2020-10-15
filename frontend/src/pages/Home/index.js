import React from 'react';
import Header from '../../components/Header';

import {
 Container, Content, Main, ButtonLink
} from './styles';

const Home = () => (
  <Container>
    <Content>
      <Header />

      <Main>
        <h1>Sortei nomes para sua troca de presentes</h1>
        <p>
          Organize seu amigo secreto usando E-mail com o mais simples e gratuito
          gerador.
        </p>
        <ButtonLink to="/secret-friend-generator">
          Comecar adicionando um amigo
        </ButtonLink>
      </Main>
    </Content>
  </Container>
);
export default Home;
