import styled from 'styled-components/native';
import {Colors} from '../../config/Colors';
import {Fonts} from '../../config/Fonts';

export const Container = styled.SafeAreaView`
  background-color: #303638;
  height: 100%;
  padding: 0 15px;
`;

export const ViewLogo = styled.View`
  align-items: center;
`;

export const IconView = styled.TouchableOpacity`
  flex-direction: row;
  justify-content: space-between;
  margin: 10px 0;
`;

export const IconVert = styled.TouchableOpacity`
  background-color: white;
  width: 28px;
  height: 28px;
  align-items: center;
  border-radius: 5px;
`;

export const MessageOptions = styled.View`
  background-color: #e7e7e7;
  height: 50px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  margin: 10px 0px;
`;
export const TitleText = styled.Text``;

export const TextName = styled.Text``;

export const Text = styled.Text`
  font-size: 16px;
  font-weight: bold;
  padding: 10px;
  border-radius: 8px;
`;

export const TextData = styled.Text`
  font-size: 15px;
  background-color: gray;
  border-radius: 5px;
  color: white;
  height: 20px;
  width: 70px;
  text-align: center;
`;

export const DateView = styled.Text`
  color: white;
  text-align: center;
  margin: 10px;
  font-size: 16px;
`;

export const ViewDate = styled.View``;

export const ViewText = styled.View`
  flex-direction: row;
  align-items: center;
  padding: 10px;
  border-radius: 10px;
`;

export const MessageImage = styled.Image`
  height: 30px;
  width: 30px;
  border-radius: 10px;
`;

export const TextInput = styled.Text``;
export const ViewInput = styled.TouchableOpacity`
  position: absolute;
  bottom: 0;
  width: 100%;
  margin: 18px;
  flex-direction: row;
`;

export const IconReturn = styled.TouchableOpacity`
  margin: 8px -35px;
  z-index: 100;
`;
