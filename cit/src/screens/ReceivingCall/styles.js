import styled from 'styled-components/native';
import {Colors} from '../../config/Colors';
import {Fonts} from '../../config/Fonts';

export const Container = styled.SafeAreaView`
  background-color: #293335;
  flex: 1;
`;
export const ViewLogo = styled.View`
  align-items: center;
  margin-top: 5px;
  margin-bottom: 15px;
`;

export const IconView = styled.View`
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const TitleText = styled.Text`
  font-size: 26px;
  text-align: center;
  color: #04e018;
`;
export const AdressText = styled.Text`
  font-size: 18px;
  text-align: center;
  color: white;
  max-width: 320px;
  margin: 10px;
`;

export const IconMessageText = styled.Text`
  width: 100px;
  font-size: 14px;
  text-align: center;
  justify-content: center;
  color: white;
  border: 1px solid white;
  border-radius: 5px;
  padding: 5px 12px 5px 12px;
`;

export const ImageUser = styled.View`
  padding: 5%;
  justify-content: center;
  align-items: center;
`;
export const ImgCaller = styled.Image`
  width: 230px;
  height: 230px;
  border-radius: 5px;
`;

export const IconImageView = styled.View`
  justify-content: center;
  align-items: center;
`;

export const IconTextView = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
`;

export const IconContainerView = styled.View`
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`;

export const IconColorCallView = styled.View`
  background-color: #2ca303;
  width: 90px;
  height: 90px;
  border-radius: 45px;
  justify-content: center;
  align-items: center;
  margin: 15px;
`;
export const IconColorMessageView = styled.View`
  width: 90px;
  height: 90px;
  border-radius: 45px;
  background-color: #d84444;
  justify-content: center;
  align-items: center;
  margin: 15px;
`;
