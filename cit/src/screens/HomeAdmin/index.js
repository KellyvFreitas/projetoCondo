import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
//-----------------------Components---------------------------------
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Logo from '../../assets/svg/Logo-noback.svg';
import TabBar from '../../components/TabBar';
import {Colors} from '../../config/Colors';
//-----------------------Services---------------------------------
//-----------------------Styles------------------------------------
import {
  ButtonADMPanel,
  ButtonADMText,
  ButtonInviteText,
  ButtonPanel,
  ButtonText,
  Container,
  IconAlertView,
  IconColorCallView,
  IconColorMessageView,
  IconImageView,
  IconMessageText,
  IconTextView,
  IconView,
  InputArea,
  InvitationOptions,
  InvitationPanel,
  InviteAndCallPanel,
  TextTitle,
  ViewLogo,
  ViewTabBar,
} from './styles';

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
      screen: 'InviteListAdmin',
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
      screen: 'MessagesAdmin',
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
        <Logo width="250" height="90" />

        <InviteAndCallPanel>
          <ButtonADMPanel>
            <ButtonADMText>APP ADMINISTRADOR</ButtonADMText>
          </ButtonADMPanel>
          <ButtonPanel onPress={() => navigate('SignIn')}>
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
          <InvitationOptions onPress={() => navigate('MessagesAdmin')}>
            <ButtonInviteText>ACESSAR MENSAGENS</ButtonInviteText>
          </InvitationOptions>
          <InvitationOptions>
            <ButtonInviteText>BAIXAR MENSAGENS</ButtonInviteText>
          </InvitationOptions>
        </InvitationPanel>
      </InputArea>

      <IconView>
        <IconImageView onPress={() => navigate('Calling')}>
          <IconColorCallView>
            <Icon name="phone" size={70} color="white" />
          </IconColorCallView>
        </IconImageView>
        <IconTextView onPress={() => navigate('MessagesAdmin')}>
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
