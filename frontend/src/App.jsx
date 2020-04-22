import React, { useReducer } from 'react';
import { ThemeProvider } from 'styled-components';
import { reducer, initialState, Context } from './store';
import Routes from './routes';
import light from './styles/theme/light';
import GlobalStyles from './styles/globalStyles';

export default function App() {
  const [store, dispatch] = useReducer(reducer, initialState);

  return (
    <Context.Provider value={{ store, dispatch }}>
      <ThemeProvider theme={light}>
        <GlobalStyles />
        <Routes />
      </ThemeProvider>
    </Context.Provider>
  );
}
