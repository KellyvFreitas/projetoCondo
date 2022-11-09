import styled from 'styled-components/native';
import {Colors} from '../../config/Colors';
import {Fonts} from '../../config/Fonts';

export const Container = styled.SafeAreaView`
  background-color: ${Colors.background};
  flex: 1;
`;
export const ViewLogo = styled.View`
  align-items: center;
  margin-top: 0;
`;

export const InviteAndCallPanel = styled.View`
  flex-direction: row;
  width: 100%;
  height: 45px;
  align-items: center;
  background-color: #087ca4;
  justify-content: space-around;
`;

export const ButtonPanel = styled.TouchableOpacity`
  width: 60px;
  height: 25px;
  justify-content: center;
  align-items: center;
  background-color: #0894c4;
  border-radius: 5px;
`;

export const ButtonText = styled.Text`
  font-size: 12px;
  font-weight: 500;
  color: white;
  text-align: center;
`;

export const ButtonADMPanel = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
`;

export const ButtonADMText = styled.Text`
  font-size: 12px;
  font-weight: 500;
  color: white;
  text-align: center;
`;

export const IconView = styled.View`
  justify-content: space-around;
  align-items: center;
  height: 200px;
  flex-direction: row;
`;

export const IconImageView = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
`;

export const IconTextView = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
`;

export const IconMessageText = styled.Text`
  font-size: 14px;
  width: 100%;
  text-align: center;
  border-radius: 5px;
  color: #fff;
  background-color: #087ca4;
  padding: 2px;
`;

export const ViewTabBar = styled.View`
  flex-direction: row;
  background-color: ${Colors.backgroundInput};
  height: 70px;
`;

export const IconColorCallView = styled.View`
  width: 100%;
  width: 110px;
  height: 110px;
  background-color: #38d404;
  border: 1px solid gray;
  border-radius: 55px;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;
`;
export const IconColorMessageView = styled.View`
  flex-direction: row;
  width: 100%;
  width: 110px;
  height: 110px;
  background-color: #087ca4;
  border: 1px solid gray;
  border-radius: 55px;
  justify-content: center;
  align-items: center;
  padding-right: 40px;
  margin-top: 25px;
  margin-bottom: 10px;
  transform: scaleX(-1);
`;
export const IconAlertView = styled.View`
  margin-bottom: 75px;
  transform: scaleX(-1);
`;

export const InputArea = styled.View`
  flex: 1;
  justify-content: center;
  margin-top: 15px;
  margin-left: 45px;
  width: 75%;
`;

export const TextTitle = styled.Text`
  justify-content: center;
  align-content: center;
  margin-bottom: 5px;
  font-size: 16px;
  font-weight: 500;
`;

export const ButtonInviteText = styled.Text`
  font-size: 12px;
  font-weight: 500;
  color: white;
  text-align: center;
`;

export const InvitationOptions = styled.TouchableOpacity`
  flex-direction: row;
  height: 30px;
  background-color: white;
  align-items: center;
  justify-content: center;
  width: 150px;
  background-color: #0894c4;
  border-radius: 5px;
  margin-right: 5px;
`;

export const InvitationPanel = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: space-between;
`;
