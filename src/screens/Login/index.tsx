import React, { useCallback, useRef, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import * as Yup from 'yup';
import { Alert, TextInput } from 'react-native';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/mobile';
import Header from '../../components/Logo';
import InputLogin from '../../components/Input/InputLogin';
import { Container, Content, Fields } from './styles';
import { useAuth } from '../../hooks/auth';

const Login: React.FC = () => {
  interface LoginFormData {
    email: string;
    password: string;
  }

  const formRef = useRef<FormHandles>(null);
  const navigation = useNavigation();

  const { signIn } = useAuth();
  const passwordInputRef = useRef<TextInput>(null);

  const handleSignIn = useCallback(
    async (data: LoginFormData) => {
      try {
        formRef.current?.setErrors({});
        const schema = Yup.object().shape({
          email: Yup.string().required(),
          password: Yup.string().required(),
        });
        await schema.validate(data, {
          abortEarly: false,
        });

        await signIn({
          email: data.email,
          password: data.password,
        });
      } catch (error) {
        console.log(error);
        Alert.alert(
          'Erro na autenticacão',
          'Ocorreu um erro ao fazer login, cheque as credencias',
        );
      }
    },
    [signIn],
  );

  return (
    <Container>
      <Content>
        <Header type="light" />
        <Fields>
          <Form ref={formRef} onSubmit={handleSignIn}>
            <InputLogin
              label="Email"
              name="email"
              autoCorrect={false}
              autoCapitalize="none"
              keyboardType="email-address"
              placeholder="Digite o seu E-mail"
            />

            <InputLogin
              label="Senha"
              name="password"
              secureTextEntry
              placeholder="Digite a sua senha"
              returnKeyType="send"
              onSubmitEditing={() => {
                formRef.current?.submitForm();
              }}
              onPressButton={() => {
                formRef.current?.submitForm();
              }}
            />
          </Form>
        </Fields>
      </Content>
    </Container>
  );
};

export default Login;
