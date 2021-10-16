import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View.attrs({
  shadowColor: 'rgba(84, 16, 95, 0.13)',
  shadowOffset: {
    width: 5,
    height: 3,
  },
  shadowOpacity: 0.8,
  shadowRadius: 5.65,

  elevation: 6,
})`
  width: 100%;
  flex-direction: row;
  height: ${RFValue(160)}px;
  border-radius: ${RFValue(4)}px;
  margin-top: ${RFValue(16)}px;
  background-color: ${({ theme }) => theme.colors.light};
`;
export const Book = styled.View`
  width: ${RFValue(113)}px;
  height: 100%;
  padding: ${RFValue(19)}px ${RFValue(16)}px;
`;

export const ContainerImageBook = styled.View.attrs({
  shadowColor: 'rgba(0, 0, 0, 0.4)',
  shadowOffset: {
    width: 3,
    height: 3,
  },
  shadowOpacity: 0.5,
  shadowRadius: 4.65,

  elevation: 6,
})``;

export const ImageBook = styled.Image`
  width: 100%;
  height: 100%;
`;
export const Content = styled.View`
  flex: 1;
  justify-content: space-between;
  padding: ${RFValue(16)}px;
`;
export const Header = styled.View``;
export const Title = styled.Text`
  font-size: ${RFValue(14)}px;
  line-height: ${RFValue(20)}px;
  color: ${props => props.theme.colors.dark};
  font-family: ${props => props.theme.fonts.medium};
`;
export const Authors = styled.Text`
  font-size: ${RFValue(12)}px;
  line-height: ${RFValue(20)}px;
  color: ${props => props.theme.colors.pink};
  font-family: ${props => props.theme.fonts.regular};
`;
export const Description = styled.View``;
export const DescriptionText = styled.Text`
  font-size: ${RFValue(12)}px;
  line-height: ${RFValue(20)}px;
  color: ${props => props.theme.colors.gray};
  font-family: ${props => props.theme.fonts.regular};
`;
