import styled from 'styled-components';

import { Colors } from '../../config/Colors';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.Text`
  text-align: center;
  font-size: 16px;
  color: ${props => (props.color ? props.color : Colors.text)};
`;
