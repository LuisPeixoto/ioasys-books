import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';
import Octicons from 'react-native-vector-icons/Octicons';

export const Container = styled.ScrollView`
  width: 100%;
  padding: 0 ${RFValue(16)}px;
  padding-top: ${RFValue(60)}px;

  background-color: ${({ theme }) => theme.colors.light};
`;

export const ContainerImageBook = styled.View.attrs({
  shadowColor: 'rgba(0, 0, 0, 0.3)',
  shadowOffset: {
    width: 10,
    height: 17,
  },
  shadowOpacity: 0.6,
  shadowRadius: 6.65,

  elevation: 6,
})`
  height: ${RFValue(351)}px;
  margin-top: ${RFValue(12)}px;
  margin-bottom: ${RFValue(24)}px;
  padding: 0 ${RFValue(24)}px;
`;

export const ImageBook = styled.Image`
  width: 100%;
  height: 100%;
`;

export const Content = styled.View`
  width: 100%;
  padding: 0 ${RFValue(24)}px;
`;

export const Title = styled.Text`
  font-size: ${RFValue(28)}px;
  line-height: ${RFValue(40)}px;
  color: ${props => props.theme.colors.dark};
  font-family: ${props => props.theme.fonts.medium};
`;

export const Authors = styled.Text`
  font-size: ${RFValue(12)}px;
  line-height: ${RFValue(20)}px;
  color: ${props => props.theme.colors.pink};
  font-family: ${props => props.theme.fonts.regular};
  margin-bottom: ${RFValue(16)}px;
`;

export const SectionTitle = styled.Text`
  font-size: ${RFValue(12)}px;
  line-height: ${RFValue(20)}px;
  color: ${props => props.theme.colors.dark};
  font-family: ${props => props.theme.fonts.medium};
  text-transform: uppercase;
  margin: ${RFValue(16)}px 0;
`;

export const Description = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;
export const DescriptionTextLeft = styled.Text`
  font-size: ${RFValue(12)}px;
  line-height: ${RFValue(20)}px;
  color: ${props => props.theme.colors.dark};
  font-family: ${props => props.theme.fonts.medium};
`;
export const DescriptionTextRight = styled.Text`
  font-size: ${RFValue(12)}px;
  line-height: ${RFValue(20)}px;
  color: ${props => props.theme.colors.gray};
  font-family: ${props => props.theme.fonts.regular};
`;

export const Review = styled.View`
  margin-top: ${RFValue(10)}px;
  padding-bottom: ${RFValue(80)}px;
`;
export const ReviewText = styled.Text`
  font-size: ${RFValue(12)}px;
  line-height: ${RFValue(20)}px;
  color: ${props => props.theme.colors.gray};
  font-family: ${props => props.theme.fonts.regular};
`;

export const Icon = styled(Octicons).attrs({
  size: RFValue(20),
})`
  color: ${props => props.theme.colors.gray};
  line-height: ${RFValue(20)}px;
`;
