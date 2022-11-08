import styled from 'styled-components/native';
import {Colors} from '../../config/Colors';

export const Container = styled.SafeAreaView`
  background-color: ${Colors.background};
  flex: 1;
`;
export const ViewLogo = styled.View`
  align-items: center;
`;

export const QuestionsView = styled.View`
  flex-direction: row;
  align-items: center;
  margin-left: 40px;
`;

export const TextTerms = styled.Text`
  padding: 10px;
`;

export const InviteAndCallPanel = styled.View`
  flex-direction: row;
  width: 100%;
  height: 45px;
  align-items: center;
  background-color: ${Colors.primary};
  justify-content: space-around;
`;

export const ButtonPanel = styled.TouchableOpacity`
  width: 110px;
  height: 30px;
  background-color: white;
  justify-content: center;
  align-items: center;
  background-color: #0894c4;
  border-radius: 5px;
`;

export const ButtonText = styled.Text`
  font-size: 16px;
  font-weight: 500;
  color: white;
  text-align: center;
`;

export const ViewTabBar = styled.View`
  flex-direction: row;
  background-color: ${Colors.backgroundInput};
  height: 70px;
`;

export const InputArea = styled.View`
  flex: 1;
  justify-content: center;
  margin-top: 20px;
  margin-left: 45px;
  width: 75%;
`;

export const ButtonLogin = styled.TouchableOpacity`
  flex: 1;
  width: 110px;
  height: 50px;

  background-color: #0894c4;
`;

export const ViewPassword = styled.View``;

export const TextTitle = styled.Text`
  justify-content: center;
  align-content: center;
  margin-bottom: 20px;
  font-size: 18px;
  font-weight: 500;
`;

export const InvitationPanel = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: space-between;
`;

export const InvitationOptions = styled.TouchableOpacity`
  flex-direction: row;
  height: 35px;
  background-color: white;
  align-items: center;
  padding-left: 14px;
  padding-right: 14px;
  margin-top: 5px;
  background-color: #0894c4;
  border-radius: 5px;
`;

export const ButtonInviteText = styled.Text`
  font-size: 14px;
  font-weight: 500;
  color: white;
  text-align: center;
`;
