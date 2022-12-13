import styled from 'styled-components/native';
import {Colors} from '../../config/Colors';
import {Fonts} from '../../config/Fonts';

export const Container = styled.SafeAreaView`
  padding: 10px;
  height: 100%;
  margin-left: 8px;
`;

export const TitleText = styled.Text`
  color: white;
  font-weight: bold;
  padding-left: 15px;
`;

export const ViewLogo = styled.View`
  align-items: center;
`;

export const IconView = styled.TouchableOpacity``;

export const Text = styled.Text`
  font-size: 13px;
`;

export const ViewText = styled.Text`
  background-color: #3b688a;
  color: white;
  width: 95%;
  height: 45px;
  border-radius: 5px;
  text-align: center;
  padding-top: 7px;
`;

export const ButtonPort = styled.TouchableOpacity`
  border-radius: 5px;
  background-color: ${Colors.primary};
  width: 95%;
  height: 45px;
  margin: 5px 0;
  flex-direction: row;
  align-items: center;
  padding-left: 15px;
`;

export const TextButton = styled.Text`
  color: white;
  font-size: 15px;
  margin: 0 10px;
`;

export const ViewCallPanel = styled.View`
  background-color: #3b688a;
  width: 95%;
  height: 45px;
  margin: 5px 0;
  border-radius: 5px;
  padding-top: 10px;
`;

export const ViewTabBar = styled.View`
  flex-direction: row;
  background-color: ${Colors.backgroundInput};
  height: 70px;
  position: absolute;
  bottom: 0;
  width: 100%;
`;
export const ViewSelect = styled.View`
  background-color: ${Colors.textcolorBack};
  flex-direction: row-reverse;
  justify-content: center;
  align-items: center;
  width: 95%;
  border-radius: 5px;
`;

export const ViewPicker = styled.View``;

export const TextPicker = styled.Text`
  color: ${Colors.ButtonText};
  padding: 5px;
`;

export const ButtonPort1 = styled.TouchableOpacity`
  border-radius: 5px;
  background-color: ${Colors.primary};
  align-items: center;
`;
