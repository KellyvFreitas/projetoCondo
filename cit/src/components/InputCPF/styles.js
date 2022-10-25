import styled from 'styled-components/native';
import { TextInputMask } from 'react-native-masked-text';
import { Colors } from '../../config/Colors';

export const InputArea = styled.View`
  width: 100%;
  height: 50px;
  background-color: ${Colors.buttonText};
  flex-direction: row;
  border: 1px solid ${Colors.secondary};
  border-radius: 30px;
  padding-left: 15px;
  align-items: center;
  margin-bottom: 15px;
`;
export const Input = styled.TextInput`
  flex: 1;
  font-size: 16px;
  color:  ${Colors.secondary};
  margin-left: 10px;
`;
export const MaskedCPF = styled(TextInputMask).attrs({})`
  flex: 1;
  font-size: 16px;
  color:  ${Colors.secondary};
  margin-left: 10px;
`;
