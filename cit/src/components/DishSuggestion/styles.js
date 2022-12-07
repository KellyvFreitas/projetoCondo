import styled from 'styled-components/native';
import { Colors } from '../../config/Colors';
import { Fonts } from '../../config/Fonts';

export const Container = styled.View`
  flex: 1;

`;
export const Item = styled.TouchableOpacity`
width: 95%;
`;

export const ViewImage = styled.View`
flex-direction: row;
width: 100%;
margin: 10px;
`;
export const ViewQuantity = styled.View`
flex-direction: row;

`;

export const TextTitle = styled.Text`
  font-family: ${Fonts.fontRegularPoppins};
  color: ${Colors.tertiary};
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
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
export const ViewChoice = styled.View`
margin: 10px 1px 1px 20px;
`;
export const ViewChoiceItem = styled.View`
flex-direction: row;
justify-content: space-between;

`;

export const ChangeArea = styled.View`
  flex-direction: row;
  align-items: center;
  margin: 4px 8px 4px 8px;
  border: 1px solid ${Colors.tertiary};
  border-radius: 7px;


`;
export const MinusArea = styled.View`
  border-radius: 100px;
  margin-right: 10px;
  padding: 4px;
`;
export const NumberText = styled.Text`
  right: 5px;
  font-size: 16px;
  font-weight: 800;
  color: ${Colors.tertiary};
`;

export const PlusArea = styled.TouchableOpacity`
  border-radius: 100px;
  margin-right: 5px;
  padding: 4px;
`;