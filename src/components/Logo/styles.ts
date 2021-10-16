import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';
import LogoLight from '../../assets/logo_light.png';
import LogoDark from '../../assets/logo_dark.png';

interface TypeProps {
  type: 'dark' | 'light';
}

export const Container = styled.View`
  align-items: center;
  flex-direction: row;
`;

export const Logo = styled.Image.attrs(({ type }: TypeProps) => ({
  source: type === 'dark' ? LogoDark : LogoLight,
}))<TypeProps>`
  width: ${RFValue(104.4)}px;
  height: ${RFValue(36)}px;
  margin-right: ${RFValue(16)}px;
`;

export const Title = styled.Text<TypeProps>`
  font-size: ${RFValue(28)}px;
  font-family: ${({ theme }) => theme.fonts.light};
  color: ${({ theme, type }) =>
    type === 'dark' ? theme.colors.dark : theme.colors.light};
`;
