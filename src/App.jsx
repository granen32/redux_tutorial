import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { darkTheme } from './styles/theme';
import GlobalStyle from './styles/GlobalStyle';
import Todos from './components/Todos';
import CounterContainer from './containers/CounterContainer';

const AppContainer = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

function App() {
  return (
    <>
      <ThemeProvider theme={darkTheme}>
        <GlobalStyle />
        <AppContainer>
          <CounterContainer />
          <Todos />
        </AppContainer>
      </ThemeProvider>
    </>
  );
}

export default App;
