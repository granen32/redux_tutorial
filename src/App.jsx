import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { darkTheme } from './styles/theme';
import GlobalStyle from './styles/GlobalStyle';
import CounterContainer from './containers/CounterContainer';
import TodosContainer from './containers/TodosContainer';

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
          <hr />
          <TodosContainer />
        </AppContainer>
      </ThemeProvider>
    </>
  );
}

export default App;
