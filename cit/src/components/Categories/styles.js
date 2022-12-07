import styled from 'styled-components/native';
import { Colors } from '../../config/Colors';
import { Fonts } from '../../config/Fonts';

export const Container = styled.View`
  margin-top: 10px;
  margin: 5px;

`;
export const TextView = styled.View`
  align-items: center;

`;
export const ItemTitle = styled.Text`
  font-size: 18px;
  margin-top: 10px;
  color: ${Colors.textColorLight};
  text-align: center;
  margin: 10px;
  font-family: ${Fonts.fontRegularPoppins};
`;

export const CategoriesButton = styled.TouchableOpacity`
`;
