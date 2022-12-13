import styled from 'styled-components/native';
import {Colors} from '../../config/Colors';
import {Fonts} from '../../config/Fonts';

export const Container = styled.SafeAreaView`
  background-color: ${Colors.background};
  flex: 1;
  align-items: center;
  margin-top: 10px;
`;
export const ButtonBack = styled.TouchableOpacity`
  flex-direction: row;
  width: 100%;
  margin-top: 5px;
  align-items: flex-start;
`;

export const TextBack = styled.Text`
  font-family: ${Fonts.fontRegular};
  color: ${Colors.textColorLight};
  font-size: 16px;
  margin-top: 5px;
`;
export const LogoArea = styled.View`
  width: 100%;
  align-items: center;
  margin: 80px;
`;
export const Scroller = styled.ScrollView`
  width: 100%;
`;
export const InputArea = styled.View`
  width: 100%;
  padding: 1px 20px 1px 20px;
`;
export const TextInput = styled.Text`
  font-family: ${Fonts.fontRegular};
  color: ${Colors.textColorLight};
  font-size: 16px;
  padding: 0 0 5px 0;
`;

export const ButtonArea = styled.View`
  width: 100%;
  justify-content: flex-end;
  padding: 10px 20px 10px 20px;
`;
