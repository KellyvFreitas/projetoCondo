import styled from 'styled-components/native';
import {Colors} from '../../config/Colors';
import {Fonts} from '../../config/Fonts';

export const ViewGeneral = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding: 10px;
  background-color: ${props => (props.i % 2 ? '#e3e3e3' : '#8f8f8f')};
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
  margin-left: 6px;
  margin-right: 6px;
  border-radius: 5px;
  background-color: ${props => (props.i % 2 ? '#8f8f8f' : '#e3e3e3')};
`;

export const NameTitleText = styled.Text`
  font-size: 14px;
  font-weight: bold;
  color: ${props => (props.i % 2 ? '#555555' : '#e3e3e3')};
`;
export const NamePersonText = styled.Text`
  font-size: 14px;
  font-weight: 500;
  color: ${props => (props.i % 2 ? '#555555' : '#e3e3e3')};
`;

export const TextNamePersonView = styled.View`
  padding-left: 15px;
`;

export const ViewDateTable = styled.View`
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
`;
