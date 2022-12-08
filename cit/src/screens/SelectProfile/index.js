import React from 'react';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {Colors} from '../../config/Colors';
import LogoCit from '../../assets/svg/LogoCITcírculoEscuro.svg';

import {
  Container,
  Logo,
  ViewLogo,
  ButtonAdmim,
  ButtonAdmin,
  TitleButton,
  ButtonMorador,
  ButtonMordor,
} from './styles';
import {View} from 'react-native';

export default () => {
  const {navigate} = useNavigation();

  return (
    <Container>
      <ViewLogo>
        <LogoCit width="350" height="120" />
      </ViewLogo>

      <ButtonMordor>
        <ButtonMorador>
          <TitleButton onPress={() => navigate('MainStackMorador')}>
            Morador
          </TitleButton>
        </ButtonMorador>
      </ButtonMordor>

      <ButtonAdmim>
        <ButtonAdmin>
          <TitleButton onPress={() => navigate('MainStackAdministrador')}>
            Administrador
          </TitleButton>
        </ButtonAdmin>
      </ButtonAdmim>
    </Container>
  );
};
