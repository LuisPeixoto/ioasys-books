import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';
import background from '../../assets/background_login.png';

export const Container = styled.ImageBackground.attrs({
  source: background,
})`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const Fields = styled.View`
  margin-top: ${RFValue(48)}px;
`;

export const Content = styled.View`
  width: 100%;
  padding: ${RFValue(16)}px;
`;
