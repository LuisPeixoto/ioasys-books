import React from 'react';
import { Container, Logo, Title } from './styles';

interface Props {
  type: 'dark' | 'light';
}

const Header: React.FC<Props> = ({ type }) => {
  return (
    <Container>
      <Logo type={type} />
      <Title type={type}>Books</Title>
    </Container>
  );
};

export default Header;
