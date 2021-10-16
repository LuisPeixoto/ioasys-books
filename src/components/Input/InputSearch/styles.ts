import { TextInput as Input } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';
import Ionicons from 'react-native-vector-icons/Ionicons';

export const Container = styled.View`
  flex: 1;
  border-radius: ${RFValue(4)}px;
  border: ${RFValue(1)}px solid rgba(51, 51, 51, 0.2);
  flex-direction: row;
  height: ${RFValue(48)}px;
  align-items: center;
  justify-content: space-between;
`;

export const TextInput = styled(Input).attrs({
  placeholderTextColor: 'rgba(153, 153, 153, 0.7)',
})`
  flex: 1;
  font-size: ${RFValue(12)}px;
  height: ${RFValue(48)}px;
  color: rgba(153, 153, 153, 0.7);
  margin-left: ${RFValue(11)}px;
  font-family: ${props => props.theme.fonts.medium};
`;

export const Icon = styled(Ionicons).attrs({
  size: RFValue(24),
})`
  color: ${({ theme }) => theme.colors.dark};
  margin: 0 ${RFValue(16)}px;
`;
