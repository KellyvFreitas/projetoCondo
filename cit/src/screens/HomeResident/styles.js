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

export const ViewPassword = styled.View``;

export const TaskList = styled.FlatList``;

export const IconView = styled.View`
  justify-content: space-around;
  align-items: center;
  height: 240px;
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

export const IconCallText = styled.Text`
  font-size: 13px;
  width: 100%;
  text-align: center;
  border: 1px solid gray;
  border-radius: 5px;
  color: #238602;
  border-color: #38d404;
  padding: 2px;
`;

export const IconMessageText = styled.Text`
  font-size: 13px;
  width: 100%;
  text-align: center;
  border: 1px solid gray;
  border-radius: 5px;
  color: #055874;
  border-color: #087ca4;
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
  width: 100%;
  width: 110px;
  height: 110px;
  background-color: #087ca4;
  border: 1px solid gray;
  border-radius: 55px;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;
  transform: scaleX(-1);
`;
