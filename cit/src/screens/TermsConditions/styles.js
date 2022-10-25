import styled from 'styled-components/native';
import { Colors } from '../../config/Colors';
import { Fonts } from '../../config/Fonts';

export const Container = styled.SafeAreaView`
  background-color: ${Colors.background};
  flex: 1;
`;
export const ViewLogo = styled.View`
  margin-top: 100px;
  align-items: center;
`;
export const InputArea = styled.View`
  margin-top: 40px;
  align-self: center;
  width: 70%;
`;

export const ViewPassword = styled.View`
  left: 65px;
`;

export const TextForgotPassword = styled.Text`
  font-family: ${Fonts.fontRegularPoppins};
  color: ${Colors.primary};
  font-size: 14px;
  `;

export const ViewTabBar = styled.View`
  flex: 1;
  justify-content: flex-end;
`;
