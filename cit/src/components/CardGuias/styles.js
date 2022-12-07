import styled from 'styled-components/native';
import { Colors } from '../../config/Colors';

export const Container = styled.TouchableOpacity.attrs({
  activeOpacity: 0.7,
})`
  flex: 1;
  /* background: ${props =>
    props.bgColor ? props.bgColor : Colors.secondary}; */
  border-radius: 7px;
  align-items: center;
  justify-content: center;
  margin: 10px;
  padding: 5px;
  border: 1px solid ${Colors.tertiary};

`;

export const IconArea = styled.View``;

export const TitleGuia = styled.Text`
  font-size: 14px;
  margin-top: 10px;
  color: ${props => (props.color ? props.color : Colors.fontPrimary)};
  font-family: 'Montserrat-Medium';
  text-align: center;
`;
