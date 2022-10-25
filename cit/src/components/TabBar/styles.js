import styled from 'styled-components/native';
import { Colors } from '../../config/Colors';

export const Container = styled.View`
    height: 70px;
    width: 100%;
    background-color: ${Colors.backgroundInput};
    flex-direction: row;
    justify-content: space-evenly;
    align-self: center;
`;
export const MenuButton = styled.TouchableOpacity`
  flex: 1;
  margin: 0 13px;
  justify-content: center;
  align-items: center;
`;
export const MenuButtonText = styled.Text`
  font-size: 10.7px; 
  color: ${Colors.black};
  text-align: center;
`;
export const ViewTab = styled.View`
  top: 10px;
`;