import React from 'react';
import { TextInputProps } from 'react-native';
import Button from '../Button';
import { Container, Label, TextInput, Field } from './styles';

interface Props extends TextInputProps {
  label: string;
  onPressButton?: () => void;
}

const Input: React.FC<Props> = ({ onPressButton, label, ...rest }) => {
  return (
    <Container>
      <Field>
        <Label>{label}</Label>
        <TextInput {...rest} />
      </Field>

      {onPressButton && <Button title="Entrar" />}
    </Container>
  );
};

export default Input;
