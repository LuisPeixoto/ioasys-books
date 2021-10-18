import { TextInput as Input } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import styled, { css } from 'styled-components/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Theme from '../../Global/theme';

interface Props {
  type: 'dark' | 'light';
}

export const Container = styled.View<Props>`
  flex: 1;
  align-items: center;
  justify-content: center;

  ${({ type }) =>
    type === 'light' &&
    css`
      background-color: ${({ theme }) => theme.colors.pink};
    `}
`;
