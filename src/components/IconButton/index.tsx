import React from 'react';
import { TouchableOpacityProps } from 'react-native';
import { Container, Icon } from './styles';

interface Props extends TouchableOpacityProps {
  IconName: string;
}

const IconButton: React.FC<Props> = ({ IconName, ...rest }: Props) => {
  return (
    <Container {...rest}>
      <Icon name={IconName} />
    </Container>
  );
};

export default IconButton;
