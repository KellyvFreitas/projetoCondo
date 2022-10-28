import {useNavigation} from '@react-navigation/native';
import React from 'react';
//-----------------------Components---------------------------------
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Logo from '../../assets/svg/Logo-noback.svg';
import {Colors} from '../../config/Colors';
//-----------------------Services---------------------------------
//-----------------------Styles------------------------------------
import TabBar from '../../components/TabBar';
import {
  ButtonPanel,
  Container,
  InviteAndCallPanel,
  TextTerms,
  TextTitle,
  ViewLogo,
  ViewTabBar,
  ViewTermsAndConditions,
  ButtonText,
} from './styles';

export default () => {
  const {navigate} = useNavigation();

  const menus = [
    {
      id: 1,
      title: 'Inicio',
      icon: (
        <Icon name="home-outline" size={33} color={Colors.ButtonSecondary} />
      ),
      screen: 'HomeResident',
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
      title: 'Suporte',
      icon: <Icon name="face-agent" size={33} color={Colors.ButtonSecondary} />,
      screen: 'FAQLogged',
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

  return (
    <Container>
      <ViewLogo>
        <Logo width="250" height="90" />

        <InviteAndCallPanel>
          <ButtonPanel onPress={() => navigate('HomeResident')}>
            <ButtonText>LIGAR</ButtonText>
          </ButtonPanel>
          <ButtonPanel onPress={() => navigate('InviteList')}>
            <ButtonText>CONVIDAR</ButtonText>
          </ButtonPanel>
        </InviteAndCallPanel>
      </ViewLogo>

      <ViewTermsAndConditions>
        <TextTitle>TERMOS E CONDIÇÕES</TextTitle>
        <TextTerms>
          At vero eos et accusamus et iusto odio dignissimos ducimus qui blandit
          iis praesentium voluptatum deleniti atque corrupti quos dolores et qua
          s molestias excepturi sint occaecati cupiditate non provident, similiq
          ue sunt in culpa qui officia deserunt mollitia animi, id est laborum e
          t dolorum fuga. Et harum quidem rerum facilis est et expedita distinct
          io. Nam libero tempore At vero eos et accusamus et iusto odio
          dignissimos ducimus qui blandit iis praesentium voluptatum deleniti
          atque corrupti quos dolores et qua s molestias excepturi sint
          occaecati cupiditate non provident, similiq ue sunt in culpa qui
          officia deserunt mollitia animi, id est laborum et dolorum fuga. Et
          harum quidem rerum facilis est et expedita distinc tio. Nam libero
          tempore At vero eos et accusamus et iusto odio dignissimos ducimus qui
          blandit iis praesentium voluptatum deleniti
        </TextTerms>
      </ViewTermsAndConditions>

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
