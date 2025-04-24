import styled from 'styled-components/native';
import {Colors} from '../../config/Colors';
import {Fonts} from '../../config/Fonts';

export const Container = styled.SafeAreaView`
  height: 100%;
  align-items: center;
  justify-content: center;
    background-color: ${Colors.background};
`;

export const Logo = styled.View``;

export const ViewTitle = styled.View``;

export const TitleText = styled.Text``;

export const TextTitleEnd = styled.Text``;

export const ButtonAdmim = styled.TouchableOpacity`
  width: 70%;
  height: 50px;
  align-items: center;
  justify-content: center;
  background-color: #303434;
  border-radius: 15px;
  margin: 10px 0;
`;
export const ButtonMordor = styled.TouchableOpacity`
  width: 70%;
  height: 50px;
  align-items: center;
  justify-content: center;
  background-color: ${Colors.primary};
  border-radius: 15px;
  margin: 10px 0;
`;

export const ButtonAdmin = styled.TouchableOpacity``;

export const TitleButton = styled.Text`
  color: white;
  font-size: 20px;
`;

export const ViewLogo = styled.View`
  margin: 15px;
`;

export const ButtonMorador = styled.TouchableOpacity``;
