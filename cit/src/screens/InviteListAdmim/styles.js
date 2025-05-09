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
  font-weight: 500;
`;
export const NamePersonText = styled.Text`
  font-size: 14px;
  font-weight: 500;
`;

export const ViewDateTable = styled.View`
  justify-content: center;
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

export const NameDateText = styled.Text`
  text-align: right;
  font-size: 14px;
  font-weight: 500;
`;
export const NameHourText = styled.Text`
  text-align: right;
  font-size: 12px;
  font-weight: 500;
`;

export const IconReturn = styled.TouchableOpacity`
  padding: 10px;
`;
