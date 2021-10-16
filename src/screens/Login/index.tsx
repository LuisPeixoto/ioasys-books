import React from 'react';
import Header from '../../components/Logo';
import InputLogin from '../../components/Input/InputLogin';
import { Container, Form, Fields } from './styles';

const Login: React.FC = () => {
  return (
    <Container>
      <Form>
        <Header type="light" />
        <Fields>
          <InputLogin
            label="Email"
            name="email"
            autoCorrect={false}
            autoCapitalize="none"
            keyboardType="email-address"
            icon="mail"
            placeholder="E-mail"
            returnKeyType="next"
          />

          <InputLogin
            label="Senha"
            name="password"
            secureTextEntry
            icon="lock"
            placeholder="Senha"
            returnKeyType="send"
            onPressButton={() => {}}
          />
        </Fields>
      </Form>
    </Container>
  );
};

export default Login;
