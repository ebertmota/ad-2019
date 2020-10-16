import React from 'react';
import { ToastContainer } from 'react-toastify';
import GlobalStyles from './styles/global';
import Routes from './routes';
import 'react-toastify/dist/ReactToastify.css';

const App = () => (
  <>
    <GlobalStyles />
    <ToastContainer autoClose={6000} />
    <Routes />
  </>
);
export default App;
