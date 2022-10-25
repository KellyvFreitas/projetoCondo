import styled from 'styled-components/native';
import { Colors } from '../../config/Colors';
import { Fonts } from '../../config/Fonts';

export const InputArea = styled.View`
  flex-direction: row;
  justify-content: space-between;

  width: 100%;
  height: 48px;
  border: 1px solid ${Colors.tertiary};
  border-radius: 10px;;
 
`;
export const ViewIcon = styled.View`
right: 10px;
justify-content: center;

 
`;

export const Input = styled.TextInput`
  width: 80%;
  font-weight: 900;
  font-family: ${Fonts.fontRegular};
  font-size: 14px;
  margin-left: 10px;

`;
