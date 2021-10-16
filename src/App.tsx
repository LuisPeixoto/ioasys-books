import React from 'react';
import { StatusBar } from 'react-native';
import { ThemeProvider } from 'styled-components';
import theme from './Global/theme';
import Home from './screens/Home';

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <StatusBar translucent backgroundColor="transparent" />
      <Home />
    </ThemeProvider>
  );
};

export default App;
