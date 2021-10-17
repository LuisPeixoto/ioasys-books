import React from 'react';
import { TouchableOpacityProps } from 'react-native';
import { Container, Title } from './styles';

interface Props extends TouchableOpacityProps {
  title: string;
  hasBorder?: boolean;
}

const Button: React.FC<Props> = ({ title, hasBorder, ...rest }: Props) => {
  return (
    <Container hasBorder={hasBorder} {...rest}>
      <Title hasBorder>{title}</Title>
    </Container>
  );
};

export default Button;
