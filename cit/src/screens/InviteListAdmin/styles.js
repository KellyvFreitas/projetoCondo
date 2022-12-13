import styled from 'styled-components/native';
import {Colors} from '../../config/Colors';
import {Fonts} from '../../config/Fonts';

export const Container = styled.SafeAreaView`
  background-color: #303434;
  height: 100%;
  padding: 0 10px;
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
  position: absolute;
  bottom: 0;
`;

export const InputArea = styled.View`
  margin-top: 5px;
  margin-left: 30px;
  margin: 10px;
`;

export const InvitationOptions = styled.TouchableOpacity``;

export const ViewText = styled.View``;

export const ViewListChat = styled.View`
  background-color: #e7e7e7;
  border-radius: 6px;
  margin: 10px;
  height: 40%;
`;

export const TitleMessage = styled.Text`
  position: absolute;
  font-size: 16px;
  font-weight: bold;
  margin: 8px 20px;
`;

export const BadgeMessage = styled.Text`
  background-color: gray;
  border-radius: 5px;
  color: white;
  margin: 8px 120px;
  height: 30px;
  width: 30%;
  text-align: center;
  padding: 5px 0;
`;

export const ViewTitleChat = styled.View`
  justify-content: center;
`;

export const ViewChat = styled.TouchableOpacity`
  flex-direction: row;
  justify-content: space-between;
`;

export const ImageChat = styled.Image`
  height: 50px;
  width: 50px;
  border-radius: 20px;
  margin: 10px;
`;

export const ViewChatUserInfo = styled.View`
  flex-direction: row;
`;

export const TextChatUserHouse = styled.Text`
  color: white;
  font-size: 17px;
  font-weight: bold;
`;

export const TextChatUserName = styled.Text`
  color: white;
  font-size: 16px;
  font-weight: bold;
`;

export const ViewChatDateInfo = styled.View`
  margin: 8px;
`;

export const TextDate = styled.Text`
  color: white;
  font-size: 15px;
  font-weight: bold;
`;

export const TextHour = styled.Text`
  color: white;
  font-size: 15px;
  font-weight: bold;
`;

export const ViewChatHouseName = styled.View`
  margin: 8px;
`;

export const IconReturn = styled.TouchableOpacity`
  padding: 10px;
`;
