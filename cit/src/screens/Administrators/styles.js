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

export const ButtonPasswordView = styled.View``;

export const IconButton = styled.TouchableOpacity`
  color: red;
`;

export const PasswordButtonOpacity = styled.View`
  background-color: ${Colors.backgroundInput};
  border-radius: 5px;
  margin-bottom: 7px;
  width: 300px;
  text-align: left;
  align-content: center;
  margin-left: 18px;
  flex-direction: row-reverse;
  justify-content: space-between;
`;

export const PasswordButtonOpacity1 = styled.View`
  background-color: ${Colors.backgroundInput};
  border-radius: 5px;
  margin-bottom: 7px;
  width: 300px;
  text-align: left;
  align-content: center;

  justify-content: space-between;
`;

export const InputPassword = styled.TextInput.attrs({})`
  color: ${Colors.black};
  font-size: 14px;
  font-weight: 600;
  text-align: left;
  padding-left: 15px;
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
  height: 300px;
  font-weight: 500;
  color: #736f6f;
  margin-top: 35px;
  background-color: #e8e4e4;
  border-radius: 5px;
`;

export const NameTitleText = styled.Text`
  font-size: 14px;
  font-weight: bold;
`;
export const NamePersonText = styled.Text`
  font-size: 14px;
  font-weight: 500;
`;

export const ViewDateTable = styled.View`
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
`;

export const ViewGeneral = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const ViewIcon = styled.View`
  width: 32px;
  height: 32px;
  margin-left: 10px;
  margin-right: 10px;
`;

export const TextNamePersonView = styled.View`
  padding-left: 15px;
`;

export const ViewTitleTable = styled.View`
  flex-direction: row;
`;

export const ViewIconPen = styled.TouchableOpacity`
  width: 35px;
  height: 30px;
  background-color: #736f6f;
  justify-content: center;
  align-items: center;
  margin-left: 6px;
  margin-right: 6px;
  border-radius: 5px;
`;
export const ViewTrashCan = styled.TouchableOpacity`
  width: 35px;
  height: 30px;
  background-color: #736f6f;
  justify-content: center;
  align-items: center;
  margin-left: 6px;
  margin-right: 6px;
  border-radius: 5px;
`;

export const ButtonPort = styled.TouchableOpacity`
  border-radius: 5px;
  background-color: #636363;
  width: 80px;
  height: 30px;
  margin: 5px 0;
  align-items: center;
  margin: 0 220px;
`;

export const TextButton = styled.Text`
  color: white;
  font-size: 15px;
  margin: 0 10px;
`;
