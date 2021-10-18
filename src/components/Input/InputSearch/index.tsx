import React from 'react';
import { Container, TextInput, Icon, ContentIcon } from './styles';

interface Props extends TextInputProps {
  onPress: () => void;
}

const InputSearch: React.FC<Props> = ({ onPress, ...rest }) => {
  return (
    <Container>
      <TextInput {...rest} />
      <ContentIcon onPress={onPress}>
        <Icon name="search-outline" />
      </ContentIcon>
    </Container>
  );
};

export default InputSearch;
