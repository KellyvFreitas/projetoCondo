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
  CpfBirthdayView,
  NameText,
} from './styles';
import InputCustom from '../../components/InputCustom';
import {Platform} from 'react-native';
import InputObs from '../../components/InputObs';
import InputProfile from '../../components/InputProfile';

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
            <ButtonText>MENSAGEM</ButtonText>
          </ButtonPanel>
        </InviteAndCallPanel>
      </ViewLogo>

      <InputArea>
        <TextTitle>INFORMAÇÕES PESSOAIS</TextTitle>
        <CpfBirthdayView>
          <Icon name="account-circle" size={110} color="#303434" />
          <NameText>José Batista do Nascimento Silva</NameText>
        </CpfBirthdayView>

        <InputProfile
          placeholder="058.352.924-12"
          autoCapitalize="none"
          type="text"
          editable={false}
        />
        <InputProfile
          placeholder="Data Nasc."
          autoCapitalize="none"
          type="text"
          editable={false}
        />
        <InputProfile
          placeholder="(84) 9 99115-1832"
          autoCapitalize="none"
          type="text"
          placeholderTextColor="black"
          keyboardType={Platform.OS === 'ios' ? 'number-pad' : 'numeric'}
        />
        <InputProfile
          placeholder="jbatistas@gmail.com"
          autoCapitalize="none"
          type="number"
          placeholderTextColor="black"
        />
        <InvitationPanel>
          <InvitationOptions>
            <Icon name="lock-outline" size={20} color="white" />
            <ButtonInviteText>Alterar senha</ButtonInviteText>
          </InvitationOptions>
          <InvitationOptions>
            <Icon name="pencil-outline" size={20} color="white" />
            <ButtonInviteText>Editar informações</ButtonInviteText>
          </InvitationOptions>
        </InvitationPanel>
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
