import React, {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useRef,
} from 'react';
import { TextInputProps } from 'react-native';
import { useField } from '@unform/core';
import { Container, Label, TextInput, Field } from './styles';
import Button from '../../Button';

interface InputProps extends TextInputProps {
  name: string;
  label: string;
  onPressButton?: () => void;
}

interface InputValueReference {
  value: string;
}

interface InputRef {
  focus(): void;
}
const InputForm: React.ForwardRefRenderFunction<InputRef, InputProps> = (
  { name, onPressButton, label, ...rest },
  ref,
) => {
  const inputElementRef = useRef<any>(null);
  const { registerField, defaultValue = '', fieldName } = useField<any>(name);
  const inputValueRef = useRef<InputValueReference>({ value: defaultValue });

  useImperativeHandle(ref, () => ({
    focus() {
      inputElementRef.current.focus();
    },
  }));
  useEffect(() => {
    registerField(
      {
        name: fieldName,
        ref: inputValueRef.current,
        path: 'value',
        setValue(ref: any, value) {
          inputValueRef.current.value = value;
          inputElementRef.current.setNativeProps({ text: value });
        },

        clearValue() {
          inputElementRef.current.value = '';
          inputElementRef.current.clear();
        },
      },
      [fieldName, registerField],
    );
  });
  return (
    <Container>
      <Field>
        <Label>{label}</Label>
        <TextInput
          ref={inputElementRef}
          onChangeText={value => {
            inputValueRef.current.value = value;
          }}
          {...rest}
        />
      </Field>
      {onPressButton && <Button title="Entrar" onPress={onPressButton} />}
    </Container>
  );
};

export default forwardRef(InputForm);
