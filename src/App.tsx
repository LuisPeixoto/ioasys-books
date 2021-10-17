import React from 'react';
import { StatusBar } from 'react-native';
import { ThemeProvider } from 'styled-components';
import theme from './Global/theme';
import Details from './screens/Details';
import Home from './screens/Home';
// import Home from './screens/Home';

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <StatusBar translucent backgroundColor="transparent" />
      <Details />
    </ThemeProvider>
  );
};

export default App;
