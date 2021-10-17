import { TouchableOpacity } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import styled, { css } from 'styled-components/native';

interface Props {
  hasBorder?: boolean;
}

export const Container = styled(TouchableOpacity)<Props>`
  margin: ${RFValue(12)}px ${RFValue(16)}px;
  ${({ hasBorder }) =>
    !!hasBorder &&
    css`
      border: ${RFValue(1)}px solid ${({ theme }) => theme.colors.pink};
    `}

  background-color: ${({ theme }) => theme.colors.light};
  border-radius: ${RFValue(44)}px;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.medium};
  font-size: ${RFValue(16)}px;
  padding: ${RFValue(8)}px ${RFValue(24)}px;
  color: ${({ theme }) => theme.colors.pink};
`;
