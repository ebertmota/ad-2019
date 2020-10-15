import React from 'react';
import { ToastContainer } from 'react-toastify';
import GlobalStyles from './styles/global';
import Routes from './routes';
import 'react-toastify/dist/ReactToastify.css';

const App = () => (
  <>
    <GlobalStyles />
    <ToastContainer />
    <Routes />
  </>
);
export default App;
