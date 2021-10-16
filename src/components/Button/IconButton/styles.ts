import { TouchableOpacity } from 'react-native';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';
import Ionicons from 'react-native-vector-icons/Ionicons';

export const Container = styled(TouchableOpacity)`
  width: ${RFValue(32)}px;
  height: ${RFValue(32)}px;
  border: ${RFValue(1)}px solid rgba(51, 51, 51, 0.2);
  border-radius: ${RFPercentage(50)}px;
  align-items: center;
  justify-content: center;
`;

export const Icon = styled(Ionicons).attrs({
  size: RFValue(16),
})`
  color: ${({ theme }) => theme.colors.dark};
`;
