import styled from 'styled-components/native';
import { Colors } from '../../config/Colors';
import { Fonts } from '../../config/Fonts';

export const Container = styled.SafeAreaView`
  background-color: ${Colors.background};
  flex: 1;

`;
export const ViewBanner = styled.View`
margin-top: 15px;
align-items: center;
`;
export const ButtonBanner = styled.TouchableOpacity`
width: 100%;
align-items: center;
`;
export const Divider = styled.View`
  width: 90%;
  border: 0.5px solid ${Colors.tertiary};
  margin-top: 20px;
  align-self: center;
`;
export const ImageBanner = styled.Image`
width: 90%;
border-radius: 5px;
`;
export const ViewTitle = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-self: center;
  width: 90%;
  align-items: center;
  margin-top: 15px;
  
`;
export const TextTitle = styled.Text`
font-family: ${Fonts.fontRegular};
font-size:25px;
color: ${Colors.textColorLight};
`;
export const TextTitleEnd = styled.Text`
font-family: ${Fonts.fontRegular};
font-size:18px;
color: ${Colors.tertiary};
`;

export const GuiasArea = styled.FlatList`
  /* margin-top: 30px; */
`;
export const ViewMenu = styled.View`
width: 90%;
align-self: center;
`;
export const ViewContact = styled.View`
padding: 10px;
margin: 10px;
justify-content:center;
flex-direction: row;
width: 90%;
align-self: center;
`;
export const ButtonContact = styled.TouchableOpacity`
margin: 10px;
`;