import React from 'react';
import { ThemeProvider } from 'styled-components';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'react-native';
import theme from './Global/theme';
import AppProvider from './hooks';
import Routes from './routes';

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <StatusBar translucent backgroundColor="transparent" />
      <NavigationContainer>
        <AppProvider>
          <Routes />
        </AppProvider>
      </NavigationContainer>
    </ThemeProvider>
  );
};

export default App;
