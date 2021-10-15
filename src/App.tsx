import React from 'react';
import { ThemeProvider } from 'styled-components';
import theme from './Global/theme';
import Login from './screens/Login';

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <Login />
    </ThemeProvider>
  );
};

export default App;
