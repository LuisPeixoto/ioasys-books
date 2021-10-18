import React from 'react';
import { ActivityIndicator } from 'react-native';
import theme from '../../Global/theme';
import { Container } from './styles';

interface Props {
  type: 'dark' | 'light';
}

const Loading: React.FC<Props> = ({ type }) => {
  return (
    <Container type={type}>
      <ActivityIndicator
        size="large"
        color={type === 'dark' ? theme.colors.dark : theme.colors.light}
      />
    </Container>
  );
};

export default Loading;
