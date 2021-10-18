import { RFValue } from 'react-native-responsive-fontsize';
import styled, { css } from 'styled-components/native';

interface Props {
  isActive: boolean;
}

export const Container = styled.View`
  flex-direction: row;
  flex: 1;
  background: rgba(0, 0, 0, 0.4);
  align-items: center;
  justify-content: center;
  padding: ${RFValue(16)}px;
`;

export const Icon = styled.View`
  align-items: flex-end;
`;

export const Title = styled.Text`
  font-size: ${RFValue(12)}px;
  line-height: ${RFValue(20)}px;
  color: ${props => props.theme.colors.dark};
  font-family: ${props => props.theme.fonts.medium};
`;

export const Content = styled.View`
  background: #000;
  padding: ${RFValue(16)}px;
  background-color: ${({ theme }) => theme.colors.light};
  border-radius: ${RFValue(4)}px;
`;

export const OptionsContainer = styled.View`
  margin-top: ${RFValue(8)}px;
  margin-bottom: ${RFValue(29)}px;
  flex-wrap: wrap;
  flex-direction: row;
`;
export const Option = styled.TouchableOpacity.attrs({
  activeOpacity: 0.8,
})<Props>`
  padding: ${RFValue(6)}px ${RFValue(16)}px;
  border: ${RFValue(1)}px solid rgba(51, 51, 51, 0.3);
  border-radius: ${RFValue(44)}px;
  margin: 0 ${RFValue(8)}px ${RFValue(8)}px 0;
  ${({ isActive }) =>
    isActive &&
    css`
      border: ${RFValue(1)}px solid ${({ theme }) => theme.colors.dark};
      background-color: ${({ theme }) => theme.colors.dark};
    `}
  };`;

export const OptionText = styled.Text<Props>`
  font-size: ${RFValue(12)}px;
  line-height: ${RFValue(20)}px;
  color: ${({ isActive, theme }) =>
    isActive ? theme.colors.light : theme.colors.dark};
  font-family: ${props => props.theme.fonts.regular};
`;

export const ContentButton = styled.View`
  align-items: center;
`;
