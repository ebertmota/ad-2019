import styled from 'styled-components';
import { darken } from 'polished';
import backgroundImg from '../../assets/draw-background.svg';

export const Container = styled.div`
  background: #fff;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  padding: 50px;
`;

export const Content = styled.div`
  width: 100%;
  height: 100%;
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 30px;

  background: url(${backgroundImg}) no-repeat 90% bottom;
`;

export const Main = styled.main`
  flex: 1;
  aside {
    > img {
      max-width: 400px;
    }
  }

  h1 {
    color: #444;
    margin-top: 40px;
    line-height: 43px;
    font-weight: normal;
    font-size: 30px;
    max-width: 600px;
  }
`;

export const Form = styled.form`
  margin: 50px 0;

  label {
    color: #222;
    font-size: 16px;
    margin-bottom: 10px;
  }

  input {
    padding: 10px;
    border-radius: 8px;
    border: 1px solid #c2c2c2;
  }
`;

export const FormRow = styled.div`
  display: flex;
  align-items: center;
  margin-top: 20px;

  > div {
    display: flex;
    flex-direction: column;
  }

  div + div {
    margin-left: 10px;
  }
`;

export const IconWrap = styled.div`
  cursor: pointer;
  margin-top: 29px;
  border: 1px solid #d1d1d1;
  padding: 5px;
  border-radius: 50%;

  > button {
    border: 0;
    background: none;
  }
`;

export const Button = styled.button.attrs({
  type: 'button',
})`
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
