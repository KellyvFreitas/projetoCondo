import styled from 'styled-components/native';
import {Colors} from '../../config/Colors';
import {Fonts} from '../../config/Fonts';

export const Container = styled.SafeAreaView`
  background-color: #293335;
  flex: 1;
`;
export const ViewLogo = styled.View`
  align-items: center;
  margin-top: 15px;
  margin-bottom: 25px;
`;
export const ViewTabBar = styled.View`
  flex: 1;
  flex-direction: row;
  background-color: ${Colors.backgroundInput};
  justify-content: flex-end;
  max-height: 70px;
`;

export const InputArea = styled.View`
  flex: 1;
  margin-top: 5px;
  margin-left: 30px;
  width: 85%;
`;

export const InvitationOptions = styled.TouchableOpacity``;

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
  margin-top: 40px;
`;

export const InvitationPanel = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const ButtonTextView = styled.View`
  flex-direction: column;
`;

export const IconView = styled.View`
  height: 30px;
  width: 30px;
  border-radius: 15px;
  background-color: #736f6f;
  justify-content: center;
  align-items: center;
`;

export const TextTitle = styled.Text`
  justify-content: center;
  align-content: center;
  margin-bottom: 10px;
  font-size: 18px;
  font-weight: 500;
  color: white;
`;
export const TextTitleInvite = styled.Text`
  padding: 15px;
  font-weight: 450;
`;

export const ViewGeral = styled.View`
  text-align: left;
  font-size: 15px;
  height: 170px;
  font-weight: 500;
  color: #736f6f;
  margin-top: 35px;
  background-color: #e8e4e4;
  border-radius: 5px;
`;

export const ButtonInviteTitleText = styled.Text`
  font-size: 13px;
  font-weight: 700;
  color: #736f6f;
  text-align: left;
  padding-left: 15px;
`;
export const ButtonInviteText = styled.Text`
  font-size: 12px;
  font-weight: 500;
  color: #736f6f;
  text-align: left;
  padding-left: 15px;
`;

export const IconReturn = styled.TouchableOpacity`
  padding: 10px;
`;
