import styled from 'styled-components';
import { darken } from 'polished';
import { Link } from 'react-router-dom';
import backgroundImg from '../../assets/home-background.svg';

export const Container = styled.div`
  background: #fff;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  padding: 50px;

  background: url(${backgroundImg}) no-repeat 70% bottom;
`;

export const Content = styled.div`
  width: 100%;
  height: 100%;
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 30px;
`;

export const Main = styled.main`
  flex: 1;
  aside {
    > img {
      max-width: 400px;
    }
  }

  h1 {
    margin-top: 40px;
    line-height: 43px;
    font-weight: normal;
    font-size: 40px;
    max-width: 600px;
  }

  p {
    margin-top: 20px;
    font-size: 20px;
    max-width: 600px;
    margin-bottom: 60px;
  }
`;
export const ButtonLink = styled(Link)`
  position: relative;
  background: #f4536a;
  font-size: 20px;
  color: #fff;
  padding: 15px;
  border: 0;
  font-weight: bold;
  border-radius: 8px;
  transition: background 0.2s;

  &:hover {
    background: ${darken(0.2, '#f4536a')};
  }
`;
