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
  ViewInput,
  InvitationOptions,
  InvitationPanel,
  TextTitle,
  ButtonInviteText,
  CpfBirthdayView,
  NameText,
  ViewGeral,
  TextTitleInvite,
  AddInvitationPanel,
  ButtonAddView,
  ButtonTextView,
  ButtonInviteTitleText,
  IconView,
  ButtonInviteClickText,
  TextCPF,
  ViewInfoGeral,
} from './styles';
import InputCustom from '../../components/InputCustom';
import {FlatList, Platform, ScrollView} from 'react-native';
import InputObs from '../../components/InputObs';
import InputProfile from '../../components/InputProfile';
import ResidentListEdit from '../../components/ResidentListEdit';

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

  const DATA = [
    {
      id: 0,
      phone: '(84) 98812-1213',
      name: 'Edinelza Mascarenhas',
      img: 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
    },
    {
      id: 1,
      phone: '(84) 98812-1213',
      name: 'Wagner Perez',
      img: 'https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1476&q=80',
    },
    {
      id: 2,
      phone: '(84) 98812-1213',
      name: 'Joao Carlos',
      img: 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80',
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

      <ScrollView>
        <InputArea>
          <TextTitle>INFORMAÇÕES PESSOAIS</TextTitle>
          <CpfBirthdayView>
            <Icon name="account-circle" size={110} color="#303434" />
            <NameText>José Batista do Nascimento Silva</NameText>
          </CpfBirthdayView>

          <ViewInfoGeral>
            <ViewInput>
              <TextCPF>058.352.924-12</TextCPF>
            </ViewInput>
            <ViewInput>
              <TextCPF>Data Nasc.</TextCPF>
            </ViewInput>
          </ViewInfoGeral>
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

          <ViewGeral>
            <TextTitleInvite>
              DEMAIS MORADORES DA SUA RESIDÊNCIA
            </TextTitleInvite>

            <FlatList
              nestedScrollEnabled
              data={DATA}
              renderItem={({item, index}) => (
                <ResidentListEdit
                  phone={item?.phone}
                  name={item?.name}
                  img={{uri: item?.img}}
                  index={index}
                />
              )}
              keyExtractor={item => item?.id}
            />

            <AddInvitationPanel>
              <ButtonAddView>
                <IconView>
                  <Icon name="plus" size={24} color="white" />
                </IconView>
                <ButtonTextView>
                  <ButtonInviteTitleText>
                    Adicionar nova residência
                  </ButtonInviteTitleText>
                  <ButtonInviteClickText>Clique aqui</ButtonInviteClickText>
                </ButtonTextView>
              </ButtonAddView>
            </AddInvitationPanel>
          </ViewGeral>
        </InputArea>
      </ScrollView>

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
