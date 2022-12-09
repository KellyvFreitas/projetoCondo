import {useFocusEffect, useNavigation} from '@react-navigation/native';
import React, {useCallback, useState} from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {generallocations} from '../../Services/Locations';
import SelectMultiple from '../../components/Select';

import {
  Container,
  ViewLogo,
  IconView,
  ViewText,
  Text,
  ButtonPort,
  TextButton,
  ViewCallPanel,
  TitleText,
  ViewTabBar,
} from './styles';
import Logo from '../../assets/svg/Logo-noback.svg';
import {Colors} from '../../config/Colors';
import TabBar from '../../components/TabBar';

export default ({route}) => {
  const {navigate} = useNavigation();
  const contact = route.params;

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

  const menus = [
    {
      id: 1,
      title: 'Suporte',
      icon: <Icon name="face-agent" size={33} color={Colors.ButtonSecondary} />,
      screen: 'FAQLogged',
    },
    {
      id: 2,
      title: 'Convites',
      icon: (
        <Icon name="email-outline" size={33} color={Colors.ButtonSecondary} />
      ),
      screen: 'InviteList',
    },
    {
      id: 3,
      title: 'Termos e Cond.',
      icon: (
        <Icon
          name="book-open-variant"
          size={33}
          color={Colors.ButtonSecondary}
        />
      ),
      screen: 'TermsConditionsLogged',
    },
    {
      id: 4,
      title: 'Perfil',
      icon: (
        <Icon name="account-outline" size={33} color={Colors.ButtonSecondary} />
      ),
      screen: 'ProfileResident',
    },
  ];

  const [selectedLanguage, setSelectedLanguage] = useState();

  return (
    <Container>
      <ViewLogo>
        <Logo width="250" height="90" />
      </ViewLogo>
      <IconView onPress={() => navigate('HomeResident')}>
        <Icon name="chevron-left-box" size={36} color={Colors.primary} />
      </IconView>

      <ViewCallPanel>
        <TitleText>{contact.title}</TitleText>
      </ViewCallPanel>

      <ViewText>
        <Text>PARA QUEM VOCÊ QUER LIGAR?</Text>
      </ViewText>

      <ButtonPort onPress={() => navigate('ReceivingCall', contact)}>
        <Icon name="account" size={30} color="white" />
        <TextButton>PORTARIA</TextButton>
      </ButtonPort>

      <ButtonPort onPress={() => navigate('ReceivingCall', contact)}>
        <Icon name="account-tie" size={30} color="white" />
        <TextButton>ADMINISTRAÇÃO</TextButton>
      </ButtonPort>

      <ButtonPort onPress={() => navigate('ReceivingCall')}>
        <Icon name="home-city" size={30} color="white" />
        <TextButton>OUTRAS RESIDÊNCIAS DO CONDOMÍNIO</TextButton>
      </ButtonPort>

      <ViewTabBar>
        {menus.map((item, index) => (
          <TabBar
            onPress={() => navigate(item.screen)}
            icon={item?.icon}
            title={item?.title}
          />
        ))}
      </ViewTabBar>
    </Container>
  );
};
