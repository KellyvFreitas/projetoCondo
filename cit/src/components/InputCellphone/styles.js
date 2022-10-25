import styled from 'styled-components/native';
import { TextInputMask } from 'react-native-masked-text';
import { Colors } from '../../config/Colors';
export const InputArea = styled.View`
  flex-direction: row;
  width: 100%;
  height: 48px;
  border: 1px solid ${Colors.tertiary};
  border-radius: 10px;
  padding-left: 15px;
  padding-right: 15px;
  align-items: center;
  margin-bottom: 15px;
`;
export const Input = styled.TextInput`
  flex: 1;
  font-size: 16px;
  color: ${Colors.tertiary};
  margin-left: 10px;
`;

export const MaskedCell = styled(TextInputMask).attrs({})`
  flex: 1;
  font-size: 16px;
  color: ${Colors.tertiary};
  margin-left: 10px;
`;
