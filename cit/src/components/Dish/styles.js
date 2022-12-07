import styled from 'styled-components/native';
import { Colors } from '../../config/Colors';
import { Fonts } from '../../config/Fonts';

export const Container = styled.View`
  flex: 1;

`;
export const Item = styled.TouchableOpacity`
width: 60%;
`;

export const ItemImage = styled.Image`
  width: 120px;
  height: 120px;
  border-radius: 8px;

`;
export const ViewImage = styled.View`
flex-direction: row;
width: 100%;
margin: 10px;
`;

export const TextTitle = styled.Text`
  font-family: ${Fonts.fontRegularPoppins};
  color: ${Colors.tertiary};
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  font-weight: 800;
  margin-left: 10px;
`;
export const TextDescription = styled.Text`
  font-family: ${Fonts.fontRegularPoppins};
  color: ${Colors.textColorLight};
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  font-weight: 400;
  margin-left: 15px;
`;
export const TextView = styled.View`
 
`;
export const TextIcon = styled.View`
  flex-direction: row;
  align-items: center;
`;
export const ViewFooter = styled.View`
  flex-direction: row;
 justify-content: space-between;
 margin-left: 15px;
`;

export const TextFooter = styled.Text`
  font-family: ${Fonts.fontRegularPoppins};
  color: ${Colors.tertiary};
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  font-weight: 800;

`;
export const TextPrice = styled.Text`
  font-family: ${Fonts.fontRegularPoppins};
  color: ${Colors.tertiary};
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  font-weight: 800;

`;
export const Divider = styled.View`
  width: 90%;
  border: 0.4px solid ${Colors.tertiary};
  margin: 10px;
  align-self: center;
`;