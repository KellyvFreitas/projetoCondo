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
`;
export const InputArea = styled.View`
  flex: 1;
  margin-top: 40px;
  align-self: center;
  width: 70%;
`;

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
export const FlatListBar = styled.FlatList`
  flex: 1;
  max-height: 70px;
  width: 100%;
  background-color: ${Colors.backgroundInput};
`;

export const ViewTermsAndConditions = styled.View`
  margin-top: -250px;
  flex: 1;
`;

export const TextTerms = styled.Text`
  justify-content: center;
  text-align: justify;
  align-content: center;
  margin: 20px 40px 20px;
`;

export const TextTitle = styled.Text`
  justify-content: center;
  align-content: center;
  margin-left: 40px;
  font-size: 16px;
  font-weight: bold;
`;

export const InviteAndCallPanel = styled.View`
  flex-direction: row;
  width: 100%;
  height: 45px;
  background-color: ${Colors.primary};
  justify-content: center;
  align-items: center;
`;

export const ButtonPanel = styled.Button``;
