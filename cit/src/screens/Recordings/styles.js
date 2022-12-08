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
  width: 40px;
  height: 40px;
  margin-left: 2px;
  border-radius: 20px;
  align-self: center;
  border-color: black;
  justify-content: center;
  align-items: center;
  align-self: center;
  border-width: 1px;
  border-color: gray;
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

export const SoundImg = styled.View`
  flex-direction: row;
  background-color: #e8e4e4;
  justify-content: space-around;
  align-items: center;
  border-radius: 5px;
`;

export const PlayOpacity = styled.TouchableOpacity``;

export const AudioView = styled.View``;

export const DownloadAudioOpacity = styled.TouchableOpacity`
  background-color: #b1b1b1;
  width: 90px;
  height: 25px;
  border-radius: 6px;
  margin-top: 9px;
  justify-content: center;
`;

export const TextDownload = styled.Text`
  font-size: 12px;
  align-self: center;
`;

export const DownloadView = styled.View`
  margin-left: 230px;
`;

export const IconReturn = styled.TouchableOpacity`
  padding: 10px;
`;
