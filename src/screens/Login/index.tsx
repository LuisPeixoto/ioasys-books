import React from 'react';
import Header from '../../components/Header';
import Input from '../../components/Input';
import { Container, Form, Fields } from './styles';

const Login: React.FC = () => {
  return (
    <Container>
      <Form>
        <Header type="light" />
        <Fields>
          <Input
            label="Email"
            name="email"
            autoCorrect={false}
            autoCapitalize="none"
            keyboardType="email-address"
            icon="mail"
            placeholder="E-mail"
            returnKeyType="next"
          />

          <Input
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
