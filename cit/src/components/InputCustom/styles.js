import styled from 'styled-components/native';
import {Colors} from '../../config/Colors';
import {Fonts} from '../../config/Fonts';
export const InputArea = styled.View`
  flex-direction: row;
  elevation: 3;
  width: 100%;
  height: 48px;
  background-color: ${Colors.backgroundInput};
  border: 0.5px solid ${Colors.black};
  border-radius: 5px;
  padding-left: 15px;
  padding-right: 15px;
  align-items: center;
  margin-bottom: 15px;
`;
export const Input = styled.TextInput.attrs({})`
  color: ${Colors.black};
  font-weight: 600;
  font-family: ${Fonts.fontRegular};
  flex: 1;
  font-size: 14px;
  margin-left: 10px;
`;
