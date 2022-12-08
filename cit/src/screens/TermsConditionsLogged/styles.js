import styled from 'styled-components/native';
import {Colors} from '../../config/Colors';

export const Container = styled.SafeAreaView`
  background-color: ${Colors.background};
  flex: 1;
`;
export const ViewLogo = styled.View`
  align-items: center;
`;

export const ViewTermsAndConditions = styled.ScrollView`
  flex: 1;
`;

export const TextTerms = styled.Text`
  justify-content: center;
  text-align: justify;
  align-content: center;
  margin: 20px 40px 20px;
`;

export const TextTitle = styled.Text`
  justify-content: center;
  align-content: center;
  margin-left: 40px;
  margin-top: 30px;
  font-size: 16px;
  font-weight: bold;
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

export const ViewTabBar = styled.View`
  flex-direction: row;
  background-color: ${Colors.backgroundInput};
  height: 70px;
`;
