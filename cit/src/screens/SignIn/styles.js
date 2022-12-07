import styled from 'styled-components/native';
import {Colors} from '../../config/Colors';
import {Fonts} from '../../config/Fonts';

export const Container = styled.SafeAreaView`
  background-color: ${Colors.background};
  flex: 1;
`;
export const ViewLogo = styled.View`
  margin-top: 100px;
  align-items: center;
`;
export const InputArea = styled.View`
  flex: 1;
  margin-top: 40px;
  align-self: center;
  width: 70%;
`;

export const ViewPassword = styled.TouchableOpacity``;
export const ForgetPasswordTouchable = styled.TouchableOpacity``;

export const TextForgotPassword = styled.Text`
  font-family: ${Fonts.fontRegularPoppins};
  color: ${Colors.primary};
  font-size: 14px;
  margin-bottom: 4px;
`;

export const ViewTabBar = styled.View`
  flex: 1;
  flex-direction: row;
  background-color: ${Colors.backgroundInput};
  justify-content: flex-end;
  max-height: 70px;
`;
export const FlatListBar = styled.FlatList`
  flex: 1;
  height: 70px;
  width: 100%;
  background-color: ${Colors.backgroundInput};
`;
export const ButtonLogin = styled.Button``;
