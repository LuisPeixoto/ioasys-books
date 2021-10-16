import React from 'react';
import { TextInputProps } from 'react-native';
import { Container, TextInput, Icon } from './styles';

type Props = TextInputProps;

const InputSearch: React.FC<Props> = ({ ...rest }) => {
  return (
    <Container>
      <TextInput {...rest} />
      <Icon name="search-outline" />
    </Container>
  );
};

export default InputSearch;
