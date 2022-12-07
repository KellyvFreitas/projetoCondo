import styled from 'styled-components';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import { Colors } from '../../config/Colors';
import { Fonts } from '../../config/Fonts';

export const Container = styled.SafeAreaView`
  width: 100%;
  flex-direction: row;
  background-color: ${props => props.color};
  background-color: ${Colors.primary};
  margin-bottom: 5px;
`;

export const IconArea = styled.TouchableOpacity.attrs({
  activeOpacity: 0.7,
})`

bottom: 10px;
right: 10px;
`;
export const HeaderViewTitle = styled.View`
  width: 90%;
  height: 30px;
  left: 18px;
`;

export const HeaderTitle = styled.Text`
  font-size: 18px;
  text-align: center;
  font-family: ${Fonts.fontRegular};
  color: ${Colors.textColorLight};
`;
