import styled from 'styled-components/native';
import {Colors} from '../../config/Colors';
import {Fonts} from '../../config/Fonts';

export const Container = styled.SafeAreaView`
  background-color: #303434;
  flex: 1;
`;
export const ViewLogo = styled.View`
  align-items: center;
  margin-top: 15px;
  margin-bottom: 25px;
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
export const ChangeIdeaText = styled.Text`
  margin-top: 40px;
  font-size: 16px;
  text-align: center;
  color: white;
`;

export const IconMessageText = styled.Text`
  width: 100%;
  font-size: 16px;
  text-align: center;
  color: white;
  border: 1px solid gray;
  border-radius: 5px;
  border-color: white;
  padding: 5px 12px 5px 12px;
`;

export const IconImageView = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
`;

export const IconTextView = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
`;

export const IconColorCallView = styled.View`
  width: 100%;
  width: 100px;
  height: 100px;
  background-color: #2ca303;
  border-radius: 60px;
  justify-content: center;
  align-items: center;
  margin: 12px;
`;
export const IconColorMessageView = styled.View`
  width: 100%;
  width: 70px;
  height: 70px;
  background-color: #d84444;
  border-radius: 45px;
  justify-content: center;
  align-items: center;
  margin: 15px;
`;
