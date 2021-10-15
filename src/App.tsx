import React from 'react';
import { Text, View } from 'react-native';
import { ThemeProvider } from 'styled-components';
import theme from './Global/theme';

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text
          style={{ fontFamily: theme.fonts.medium, color: theme.colors.pink }}
        >
          ola mundo
        </Text>
      </View>
    </ThemeProvider>
  );
};

export default App;
