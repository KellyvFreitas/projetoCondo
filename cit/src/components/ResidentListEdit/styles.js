import styled from 'styled-components/native';
import {Colors} from '../../config/Colors';
import {Fonts} from '../../config/Fonts';

export const ViewGeneral = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding: 10px;
  background-color: ${props => (props.i % 2 ? '#f2f2f2' : '#dddddd')};
`;

export const ViewTitleTable = styled.View`
  flex-direction: row;
`;

export const Text = styled.Text``;

export const Image = styled.Image`
  width: 40px;
  height: 40px;
  border-radius: 20px;
`;

export const ViewTrashCan = styled.TouchableOpacity`
  width: 35px;
  height: 30px;
  justify-content: center;
  align-items: center;
  margin-left: 3px;
  margin-right: 3px;
  border-radius: 5px;
  background-color: #0894c4;
`;

export const NameTitleText = styled.Text`
  font-size: 12px;
  font-weight: bold;
  color: #555555;
`;
export const NamePersonText = styled.Text`
  font-size: 13px;
  font-weight: 500;
  color: #555555;
`;

export const TextNamePersonView = styled.View`
  padding-left: 15px;
`;

export const ViewDateTable = styled.View`
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
`;
