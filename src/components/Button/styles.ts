import { TouchableOpacity } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled(TouchableOpacity)`
  width: ${RFValue(85)}px;
  height: ${RFValue(36)}px;
  margin: ${RFValue(12)}px ${RFValue(16)}px;

  background-color: ${({ theme }) => theme.colors.light};
  border-radius: ${RFValue(44)}px;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.medium};
  font-size: ${RFValue(16)}px;
  color: ${({ theme }) => theme.colors.pink};
`;
