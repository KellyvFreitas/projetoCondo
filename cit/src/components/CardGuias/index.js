import React, { useContext } from 'react';
import { UserContext } from '../../contexts/UserContext';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { Colors } from '../../config/Colors';
import { Container, IconArea, TitleGuia } from './styles';

export default function CardGuias({ data, onPress, bgColor }) {

  return (
    <Container bgColor={bgColor} onPress={() => onPress(data)}>
      <IconArea>
        <MaterialCommunityIcons
          name={data?.icon}
          size={40}
          color={Colors.tertiary}
        />
      </IconArea>
      <TitleGuia color={Colors.tertiary}>{data?.title}</TitleGuia>
    </Container>
  );
}
