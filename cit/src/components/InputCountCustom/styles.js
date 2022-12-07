import styled from 'styled-components/native';
import { Colors } from '../../config/Colors';
import { Fonts } from '../../config/Fonts';

export const InputArea = styled.View`
  flex-direction: row;
  width: 100%;
  height: 50px;
  border: 1px solid ${Colors.tertiary};
  border-radius: 10px;

`;
export const Input = styled.TextInput.attrs({
  placeholderTextColor: `${Colors.tertiary}`
})`
  color: ${Colors.textColorLight};
  font-weight: 700;
  font-family: ${Fonts.fontRegular};
  font-size: 14px;
  margin-left: 10px;
  padding: 8px;
`;
