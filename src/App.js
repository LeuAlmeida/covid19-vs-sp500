import React from 'react';
import { ToastContainer } from 'react-toastify';

import Routes from './routes';
import GlobalStyle from './styles/global';

function App() {
  return (
    <>
      <Routes />
      <ToastContainer autoClose={2000} />
      <GlobalStyle />
    </>
  );
}
export default App;
