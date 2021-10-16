import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/Ionicons';
import { Platform } from 'react-native';
import background from '../../assets/background_home.png';

export const Container = styled.ImageBackground.attrs({
  source: background,
  resizeMode: 'cover',
})`
  flex: 1;
`;

export const Content = styled.View`
  margin-top: ${Platform.OS === 'ios' ? RFValue(20 + 40) : RFValue(40)}px;
  align-items: center;

  justify-content: center;
`;

export const Header = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  padding: 0 ${RFValue(16)}px;

  justify-content: space-between;
  margin-bottom: ${RFValue(32)}px;
`;

export const Filter = styled(Icon).attrs({
  size: RFValue(24),
})`
  color: ${({ theme }) => theme.colors.dark};
  margin-left: ${RFValue(22)}px;
`;

export const Search = styled.View`
  flex-direction: row;
  align-items: center;
  padding: 0 ${RFValue(16)}px;
  margin-bottom: ${RFValue(16)}px;
`;
