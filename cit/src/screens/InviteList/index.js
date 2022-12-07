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
  ViewLogo,
  ViewTabBar,
  ButtonText,
  InputArea,
  InvitationOptions,
  InvitationPanel,
  TextTitle,
  ButtonInviteText,
} from './styles';
import InputCustom from '../../components/InputCustom';
import {Platform} from 'react-native';
import InputObs from '../../components/InputObs';

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
      title: 'Suporte',
      icon: <Icon name="face-agent" size={33} color={Colors.ButtonSecondary} />,
      screen: 'FAQLogged',
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

      <InputArea>
        <TextTitle>LISTA DE CONVIDADOS</TextTitle>
        <InputCustom
          placeholder="Nome do Convidado"
          autoCapitalize="none"
          type="text"
        />
        <InputCustom
          placeholder="Telefone do Convidado"
          autoCapitalize="none"
          type="number"
          keyboardType={Platform.OS === 'ios' ? 'number-pad' : 'numeric'}
        />
        <InvitationPanel>
          <InvitationOptions>
            <Icon name="plus" size={20} color="white" />
            <ButtonInviteText>Adicionar novo convidado</ButtonInviteText>
          </InvitationOptions>
          <InvitationOptions>
            <Icon name="email-outline" size={20} color="white" />
            <ButtonInviteText>Enviar</ButtonInviteText>
          </InvitationOptions>
        </InvitationPanel>
      </InputArea>

      <InputArea>
        <TextTitle>OBSERVAÇÕES</TextTitle>
        <InputObs
          placeholder="Digite aqui caso tenha alguma observação ou comentário para a portaria ou para a administração."
          autoCapitalize="none"
          type="text"
        />
      </InputArea>

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
