import { TextInput as Input } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';
import theme from '../../Global/theme';

export const Container = styled.View`
  width: 100%;
  height: ${RFValue(60)}px;
  border-radius: ${RFValue(4)}px;
  margin-bottom: ${RFValue(16)}px;
  background: rgba(0, 0, 0, 0.32);
  flex-direction: row;
  justify-content: space-between;
`;
export const Label = styled.Text`
  font-size: ${RFValue(12)}px;
  font-family: ${props => props.theme.fonts.light};
  color: ${props => props.theme.colors.light};
  padding: ${RFValue(8)}px 0px ${RFValue(2)}px ${RFValue(13)}px;
`;
export const TextInput = styled(Input).attrs({
  placeholderTextColor: theme.colors.light,
})`
  font-size: ${RFValue(16)}px;
  font-family: ${props => props.theme.fonts.regular};
  color: ${props => props.theme.colors.light};
  padding: ${RFValue(2)}px 0px ${RFValue(8)}px ${RFValue(13)}px;
`;

export const Field = styled.View`
  width: 60%;
`;
