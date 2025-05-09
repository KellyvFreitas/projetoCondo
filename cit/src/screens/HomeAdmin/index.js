import {useFocusEffect, useNavigation} from '@react-navigation/native';
import React, {useCallback, useState} from 'react';
//-----------------------Components---------------------------------
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Logo from '../../assets/images/Condominio.png';
import { Image } from 'react-native';

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
  InvitationOptions1,
} from './styles';
import TabBarLocations from '../../components/TabBarLocations';
import {generallocations} from '../../Services/Locations';
import LogoImage from "../../assets/images/Condominio.png";

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
      screen: 'InviteListAdmim',
    },
    {
      id: 2,
      title: 'Gravações',
      icon: <Icon name="microphone" size={33} color={Colors.ButtonSecondary} />,
      screen: 'Recordings',
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
      screen: 'InviteListAdmin',
    },
    {
      id: 4,
      title: 'Admins',
      icon: (
        <Icon name="account-outline" size={33} color={Colors.ButtonSecondary} />
      ),
      screen: 'Administrators',
    },
  ];

  return (
    <Container>
      <ViewLogo>
        <Image source={LogoImage} style={{ width: 250, height: 90, resizeMode: 'contain' }} />

        <InviteAndCallPanel>
          <ButtonADMPanel>
            <ButtonADMText>APP ADMINISTRADOR</ButtonADMText>
          </ButtonADMPanel>
          <ButtonPanel>
            <ButtonText>SAIR</ButtonText>
          </ButtonPanel>
        </InviteAndCallPanel>
      </ViewLogo>

      <InputArea>
        <TextTitle>USUÁRIOS</TextTitle>
        <InvitationPanel>
          <InvitationOptions onPress={() => navigate('ResidentListAdmin')}>
            <ButtonInviteText>CADASTRAR USUARIO</ButtonInviteText>
          </InvitationOptions>
          <InvitationOptions1>
            <ButtonInviteText>ACESSAR USUARIOS</ButtonInviteText>
          </InvitationOptions1>
        </InvitationPanel>
      </InputArea>
      <InputArea>
        <TextTitle>CONVITES</TextTitle>
        <InvitationPanel>
          <InvitationOptions onPress={() => navigate('InviteListAdmim')}>
            <ButtonInviteText>ACESSAR CONVITES</ButtonInviteText>
          </InvitationOptions>
          <InvitationOptions1>
            <ButtonInviteText>BAIXAR CONVITES</ButtonInviteText>
          </InvitationOptions1>
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
            <ButtonInviteText onPress={() => navigate('InviteListAdmin')}>
              ACESSAR MENSAGENS
            </ButtonInviteText>
          </InvitationOptions>
          <InvitationOptions1>
            <ButtonInviteText>BAIXAR MENSAGENS</ButtonInviteText>
          </InvitationOptions1>
        </InvitationPanel>
      </InputArea>

      <IconView>
        <IconImageView onPress={() => navigate('HomeResident')}>
          <IconColorCallView>
            <Icon name="phone" size={70} color="white" />
          </IconColorCallView>
        </IconImageView>

        <IconTextView onPress={() => navigate('InviteListAdmin')}>
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
