import styled from 'styled-components/native';
import { Colors } from '../../config/Colors';
import { Fonts } from '../../config/Fonts';

export const Container = styled.TouchableOpacity.attrs({
  activeOpacity: 0.7,
})`
  background-color: ${props => `${props.bgcolor}`};
  margin: 8px 4px;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
`;

export const ButtonText = styled.Text`
  color: ${props => `${props.color}`};
  padding: 16px 8px;
  font-family: ${Fonts.fontRegularPoppins};
  font-size: 16px;
  font-weight: 600;
`;

export const Loading = styled.ActivityIndicator`
  padding: 16px;
`;
