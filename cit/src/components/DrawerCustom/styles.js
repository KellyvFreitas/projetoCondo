import styled from 'styled-components/native';
import { Colors } from '../../config/Colors';
import { Fonts } from '../../config/Fonts';

export const DrawerArea = styled.View`
  flex: 1;
  background-color: ${Colors.backgroundDrawer};
`;
export const DrawerLogoArea = styled.View`
  padding: 10px 20px;
  border-bottom-width: 1px;
`;
export const DrawerLogo = styled.Image`
  width: 190px;
  height: 40px;
`;
export const DrawerScroller = styled.ScrollView`
  flex: 1;
  margin: 20px 0;
`;
export const MenuButton = styled.TouchableOpacity`
  flex-direction: row;
  margin-bottom: 5px;
  margin-top: 5px;
  border-radius: 5px;
  align-items: center;
`;
export const MenuSquare = styled.View`
  width: 5px;
  height: 35px;
  margin-right: 20px;
  background-color: transparent;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
`;
export const MenuButtonText = styled.Text`
  font-size: 15px;
  margin-left: 20px;
 
  color: ${Colors.tertiary};
`;
export const Icons = styled.View``;

export const FooterArea = styled.View`
  padding: 20px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
export const FooterInfo = styled.View``;

export const FooterUnitText = styled.Text`
  font-size: 15px;
  color: ${Colors.tertiary};
`;

export const ButtonBack = styled.TouchableOpacity`
  flex-direction: row;
  border-radius: 5px;
  align-items: center;
`;

export const ButtonBackText = styled.Text`
  bottom: 30px;
  left: 15px;
  font-size: 18px;
  color:  ${Colors.tertiary};
`;
export const AreaVersionApp = styled.View`
  justify-content: center;
  align-items: center;
  margin: 15px;
`;
export const VersionApp = styled.Text`
  font-size: 11px;
  color: ${Colors.tertiary};
`;
export const ViewProfile = styled.View`
flex-direction: row;
  width: 100%;
  margin: 10px;
  padding: 5px;
`;
export const ImageProfile = styled.Image`
  width: 45px;
  height: 45px;
  border-radius: 100px;
`;
export const TextProfile = styled.Text`
  width: 100%;
  margin: 12px;
  font-size:17px;
  font-weight: 900;
  font-family: ${Fonts.fontRegular};
  color: ${Colors.tertiary};

`;
export const Divider = styled.View`
  width: 85%;
  border: 0.6px solid ${Colors.tertiary};
  margin: 2px;
  align-self: center;
`;
