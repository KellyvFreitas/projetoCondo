import styled from 'styled-components/native';
import {Colors} from '../../config/Colors';

export const Container = styled.SafeAreaView`
  background-color: ${Colors.background};
  flex: 1;
`;
export const ViewLogo = styled.View`
  align-items: center;
`;

export const ViewTermsAndConditions = styled.View`
  flex: 1;
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

export const CpfBirthdayView = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  margin-top: 5px;
  margin-bottom: 5px;
`;

export const NameText = styled.Text`
  justify-content: center;
  align-content: center;
  font-size: 18px;
  font-weight: 700;
  max-width: 150px;
  margin-left: 10px;
`;

export const TextTitle = styled.Text`
  justify-content: center;
  align-content: center;
  font-size: 18px;
  font-weight: 500;
`;

export const InvitationPanel = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const ViewInfoGeral = styled.View`
  flex-direction: row;
  justify-content: space-evenly;
`;

export const ViewInput = styled.View`
  background-color: ${Colors.backgroundInput};
  height: 45px;
  padding-left: 15px;
  padding-right: 15px;
  margin-bottom: 15px;
  border-radius: 5px;
  justify-content: center;
  width: 49%;
`;

export const TextCPF = styled.Text`
  justify-content: center;
  align-content: center;
  text-align: center;
  font-size: 14px;
  font-weight: 500;
  color: lightgray;
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

export const ViewGeral = styled.View`
  text-align: left;
  font-size: 15px;
  height: 240px;
  margin-bottom: 10px;
  font-weight: 500;
  color: #736f6f;
  margin-top: 35px;
  background-color: #e8e4e4;
  border-radius: 5px;
`;
export const TextTitleInvite = styled.Text`
  padding: 15px;
  font-weight: 450;
  font-size: 13px;
  background-color: #0894c4;
  color: white;
  border-radius: 5px;
`;
export const AddInvitationPanel = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;
export const ButtonAddView = styled.TouchableOpacity`
  flex-direction: row;
  height: 50px;
  background-color: white;
  justify-content: flex-start;
  align-items: center;
  padding-left: 20px;
  margin-top: 5px;
  background-color: #e8e4e4;
  border-radius: 5px;
  width: 100%;
`;
export const ButtonTextView = styled.View`
  flex-direction: column;
`;
export const ButtonInviteTitleText = styled.Text`
  font-size: 13px;
  font-weight: 700;
  color: #736f6f;
  text-align: left;
  padding-left: 15px;
`;
export const ButtonInviteClickText = styled.Text`
  font-size: 12px;
  font-weight: 500;
  color: #736f6f;
  text-align: left;
  padding-left: 15px;
`;
export const IconView = styled.View`
  height: 30px;
  width: 30px;
  border-radius: 15px;
  background-color: #736f6f;
  justify-content: center;
  align-items: center;
`;
