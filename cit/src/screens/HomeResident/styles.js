import styled from 'styled-components/native';
import {Colors} from '../../config/Colors';
import {Fonts} from '../../config/Fonts';

export const Container = styled.SafeAreaView`
  background-color: ${Colors.background};
  flex: 1;
`;
export const ViewLogo = styled.View`
  flex: 1;
  align-items: center;
  margin-top: 0;
`;
export const InputArea = styled.View`
  flex: 1;
  margin-top: 40px;
  align-self: center;
  width: 70%;
`;

export const InviteAndCallPanel = styled.View`
  flex-direction: row;
  width: 100%;
  height: 45px;
  justify-content: space-around;
  align-items: center;
  background-color: ${Colors.primary};
`;

export const ButtonPanel = styled.Button``;

export const ViewPassword = styled.View``;

export const TextForgotPassword = styled.Text`
  font-family: ${Fonts.fontRegularPoppins};
  color: ${Colors.primary};
  font-size: 14px;
`;

export const ViewTabBar = styled.View`
  flex: 1;
  flex-direction: row;
  background-color: ${Colors.backgroundInput};
  justify-content: flex-end;
  max-height: 70px;
`;

export const TaskList = styled.FlatList`
  margin-top: -50px;
  flex: 1;
`;

export const IconView = styled.View`
  flex: 1;
  justify-content: space-around;
  align-items: center;
  margin-top: 0;
  flex-direction: row;
`;
