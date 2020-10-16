import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  background: #fff;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  padding: 50px;
`;

export const GobackButton = styled.div`
  margin-top: 50px;
  cursor: pointer;

  display: flex;
  align-items: center;

  span {
    font-size: 16px;
    margin-left: 10px;
  }
`;

export const Content = styled.div`
  width: 100%;
  height: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 30px;
`;

export const Main = styled.main`
  flex: 1;

  display: flex;
  justify-content: center;
  align-items: center;

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
  text-align: center;
  max-width: 600px;
  width: 100%;

  h1 {
    margin-bottom: 50px;
  }

  margin: 50px 0;
  label {
    color: #222;
    font-size: 16px;
    display: block;
    margin-bottom: 15px;
  }

  input {
    width: 100%;

    padding: 10px;
    border-radius: 8px;
    border: 1px solid #c2c2c2;
  }
`;

export const FormRow = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  margin-top: 20px;

  div {
    text-align: left;
    width: 100%;
  }

  div + div {
    margin-top: 20px;
  }
`;

export const Button = styled.button.attrs({
  type: 'button',
})`
  width: 100%;
  max-width: 1200px;
  margin-top: 60px;
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
