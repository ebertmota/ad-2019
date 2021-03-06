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
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 30px;

  @media (min-width: 1280px) {
    background: url(${backgroundImg}) no-repeat 100% bottom;
  }
`;

export const Main = styled.main`
  flex: 1;

  @media (max-width: 1279px) {
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: center;
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
  h1 {
    margin-bottom: 50px;
  }
  @media (max-width: 1279px) {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

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

  @media (max-width: 1279px) {
    width: 100%;
    justify-content: center;
  }

  > div {
    display: flex;
    flex-direction: column;
  }

  div + div {
    margin-left: 10px;
  }
`;

export const Button = styled.button.attrs({
  type: 'button',
})`
  @media (max-width: 1279px) {
    width: 100%;
    max-width: 600px;
  }
  width: 300px;
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

export const Card = styled.div`
  @media (max-width: 1279px) {
    max-width: 600px;
    width: 100%;
  }

  background: #f2f2f2;
  width: 100%;
  max-width: 400px;
  padding: 20px;
  border-radius: 10px;

  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;

  strong {
    font-size: 16px;
    color: #666;
    margin-right: 10px;
  }

  p {
    font-size: 16px;
  }

  > div {
    display: flex;
  }
`;
export const IconWrap = styled.div`
  cursor: pointer;
  display: block;
  margin-top: 29px;
  border: 1px solid #d1d1d1;
  padding: 5px;
  border-radius: 50%;
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  transition: border 0.2s;

  > button {
    border: 0;
    background: none;
  }

  &:hover {
    border-color: ${props =>
      props.success ? 'green' : props.error && '#f4536a'};
`;
