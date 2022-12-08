import {useFocusEffect, useNavigation} from '@react-navigation/native';
import React, {useCallback, useState} from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {generallocations} from '../../Services/Locations';
import {
  Container,
  ViewLogo,
  IconView,
  ViewText,
  Text,
  ButtonPort,
  TextButton,
} from './styles';
import Logo from '../../assets/svg/Logo-noback.svg';
import {Colors} from '../../config/Colors';

export default () => {
  const {navigate} = useNavigation();

  const menu = [
    {
      id: 0,
      title: 'CONDOMÍNIO ALPES DO HIMALAIA',
    },
    {
      id: 1,
      title: 'CONDOMÍNIO MENDONZA',
    },
  ];

  return (
    <Container>
      <ViewLogo>
        <Logo width="250" height="90" />
      </ViewLogo>
      <IconView onPress={() => navigate('HomeResident')}>
        <Icon name="chevron-left-box" size={40} color={Colors.primary} />
      </IconView>

      {/* <CallPanel>
          <TitleText>
           colocar aqui uma forma de alterar o condominio quando for selecionar
          na tela anterior que é a de selecionar condominio '-'
          </TitleText>
        </CallPanel>*/}

      <ViewText>
        <Text>PARA QUEM VOCÊ QUER LIGAR?</Text>
      </ViewText>

      <ButtonPort>
        <TextButton>PORTARIA</TextButton>
      </ButtonPort>
    </Container>
  );
};
