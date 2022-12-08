import styled from 'styled-components/native';
import {Colors} from '../../config/Colors';
import {Fonts} from '../../config/Fonts';

export const Container = styled.SafeAreaView`
  padding: 15px;
`;

export const TitleText = styled.Text``;

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
`;

export const TextButton = styled.Text`
  color: white;
  font-size: 17px;
`;
