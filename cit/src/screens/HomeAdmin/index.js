import {useFocusEffect, useNavigation} from '@react-navigation/native';
import React, {useCallback, useState} from 'react';
//-----------------------Components---------------------------------
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Logo from '../../assets/svg/Logo-noback.svg';

import {Colors} from '../../config/Colors';
//-----------------------Services---------------------------------
//-----------------------Styles------------------------------------
import TabBar from '../../components/TabBar';
import {
  Container,
  ViewLogo,
  ViewTabBar,
  InviteAndCallPanel,
  ButtonPanel,
  TaskList,
  IconView,
  IconCallText,
  IconMessageText,
  IconImageView,
  IconTextView,
  ButtonText,
  IconColorCallView,
  IconColorMessageView,
  IconAlertView,
  InputArea,
  TextTitle,
  InvitationPanel,
  InvitationOptions,
  ButtonInviteText,
  ButtonADMText,
  ButtonADMPanel,
} from './styles';
import TabBarLocations from '../../components/TabBarLocations';
import {generallocations} from '../../Services/Locations';

export default () => {
  const {navigate} = useNavigation();
  const [location, setLocation] = useState();

  const menus = [
    {
      id: 1,
      title: 'Convites',
      icon: (
        <Icon name="email-outline" size={33} color={Colors.ButtonSecondary} />
      ),
      screen: 'InviteListAdmin',
    },
    {
      id: 2,
      title: 'Gravações',
      icon: <Icon name="microphone" size={33} color={Colors.ButtonSecondary} />,
      screen: 'InviteList',
    },
    {
      id: 3,
      title: 'Mensagens',
      icon: (
        <Icon
          name="message-processing-outline"
          size={33}
          color={Colors.ButtonSecondary}
        />
      ),
      screen: 'TermsConditionsLogged',
    },
    {
      id: 4,
      title: 'Admins',
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
          <ButtonADMPanel>
            <ButtonADMText>APP ADMINISTRADOR</ButtonADMText>
          </ButtonADMPanel>
          <ButtonPanel onPress={() => navigate('Signin')}>
            <ButtonText>SAIR</ButtonText>
          </ButtonPanel>
        </InviteAndCallPanel>
      </ViewLogo>

      <InputArea>
        <TextTitle>USUÁRIOS</TextTitle>
        <InvitationPanel>
          <InvitationOptions>
            <ButtonInviteText>CADASTRAR USUARIO</ButtonInviteText>
          </InvitationOptions>
          <InvitationOptions>
            <ButtonInviteText>ACESSAR USUARIOS</ButtonInviteText>
          </InvitationOptions>
        </InvitationPanel>
      </InputArea>
      <InputArea>
        <TextTitle>CONVITES</TextTitle>
        <InvitationPanel>
          <InvitationOptions onPress={() => navigate('InviteListAdmin')}>
            <ButtonInviteText>ACESSAR CONVITES</ButtonInviteText>
          </InvitationOptions>
          <InvitationOptions>
            <ButtonInviteText>BAIXAR CONVITES</ButtonInviteText>
          </InvitationOptions>
        </InvitationPanel>
      </InputArea>
      <InputArea>
        <TextTitle>GRAVAÇÕES</TextTitle>
        <InvitationPanel>
          <InvitationOptions onPress={() => navigate('Recordings')}>
            <ButtonInviteText>ACESSAR GRAVAÇÕES</ButtonInviteText>
          </InvitationOptions>
        </InvitationPanel>
      </InputArea>
      <InputArea>
        <TextTitle>MENSAGENS</TextTitle>
        <InvitationPanel>
          <InvitationOptions>
            <ButtonInviteText>ACESSAR CONVITES</ButtonInviteText>
          </InvitationOptions>
          <InvitationOptions>
            <ButtonInviteText>BAIXAR CONVITES</ButtonInviteText>
          </InvitationOptions>
        </InvitationPanel>
      </InputArea>

      <IconView>
        <IconImageView onPress={() => navigate('Calling')}>
          <IconColorCallView>
            <Icon name="phone" size={70} color="white" />
          </IconColorCallView>
        </IconImageView>
        <IconTextView>
          <IconColorMessageView>
            <IconAlertView>
              <Icon name="message-alert" size={38} color="red" />
            </IconAlertView>
            <Icon name="message-processing-outline" size={70} color="white" />
          </IconColorMessageView>
          <IconMessageText>(5) Não lidas</IconMessageText>
        </IconTextView>
      </IconView>

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
