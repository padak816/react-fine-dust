import React from 'react';
import Dust from './components/Dust';

import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    display:flex;
    justify-content:center;
  }
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <Dust />
    </>
  );
}

export default App;
