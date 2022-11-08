import styled from 'styled-components/native';
import {Colors} from '../../config/Colors';
import {Fonts} from '../../config/Fonts';

export const InputArea = styled.View`
  height: 40px;
  background-color: ${Colors.backgroundInput};
  border-radius: 5px;
  padding-left: 15px;
  padding-right: 15px;
  margin-bottom: 15px;
`;
export const Input = styled.TextInput.attrs({})`
  color: ${Colors.textColor};
  font-weight: 600;
  font-family: ${Fonts.fontRegular};
  font-size: 14px;
  margin-left: 10px;
`;
