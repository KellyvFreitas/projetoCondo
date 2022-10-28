import styled from 'styled-components/native';
import {Colors} from '../../config/Colors';
import {Fonts} from '../../config/Fonts';

export const InputArea = styled.View`
  flex-direction: row;
  elevation: 3;
  width: 100%;
  height: 110px;
  background-color: ${Colors.backgroundInput};
  border-radius: 5px;
  padding-left: 15px;
  padding-right: 15px;
  margin-bottom: 15px;
`;
export const Input = styled.TextInput.attrs({})`
  color: gray;
  font-weight: 600;
  font-family: ${Fonts.fontRegular};
  text-align: justify;
  flex: 1;
  align-self: baseline;
  font-size: 14px;
`;
