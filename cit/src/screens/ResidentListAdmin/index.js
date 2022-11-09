import {useFocusEffect, useNavigation} from '@react-navigation/native';
import React, {useCallback, useState} from 'react';
import {FlatList} from 'react-native';
//-----------------------Components---------------------------------
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Logo from '../../assets/svg/LogoEscuro.svg';
import InputIcon from '../../components/InputIcon';
import TabBar from '../../components/TabBar';
import ResidentList from '../../components/ResidentList';
import {Colors} from '../../config/Colors';
//-----------------------Services---------------------------------
import {generallocations} from '../../Services/Locations';
//-----------------------Styles------------------------------------
import {
  ButtonAddView,
  ButtonInviteText,
  ButtonInviteTitleText,
  ButtonTextView,
  Container,
  IconView,
  InputArea,
  InvitationOptions,
  InvitationPanel,
  TextTitle,
  TextTitleInvite,
  ViewGeral,
  ViewLogo,
  ViewTabBar,
} from './styles';

import Lupa from '../../assets/svg/lupa.svg';

export default () => {
  const {navigate} = useNavigation();
  const [location, setLocation] = useState();

  const handleGetLocations = async () => {
    const response = await generallocations.locations;
    // console.log('\n\nRESPONSE-LOCATION', JSON.stringify(response));
    setLocation(response);
  };

  useFocusEffect(
    useCallback(() => {
      handleGetLocations();
    }, []),
  );

  const menus = [
    {
      id: 1,
      title: 'Inicio',
      icon: (
        <Icon name="home-outline" size={33} color={Colors.ButtonSecondary} />
      ),
      screen: 'HomeAdmin',
    },
    {
      id: 2,
      title: 'Convites',
      icon: (
        <Icon name="email-outline" size={33} color={Colors.ButtonSecondary} />
      ),
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
      title: 'Gravações',
      icon: <Icon name="microphone" size={33} color={Colors.ButtonSecondary} />,
      screen: 'Recordings',
    },
  ];

  const DATA = [
    {
      id: 0,
      type: 'CASA 215',
      name: 'Edinelza Mascarenhas',
      img: 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
    },
    {
      id: 1,
      type: 'CASA 216',
      name: 'Wagner Perez',
      img: 'https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1476&q=80',
    },
    {
      id: 2,
      type: 'CASA 217',
      name: 'Joao Carlos',
      img: 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80',
    },
    {
      id: 3,
      type: 'CASA 216',
      name: 'Wagner Perez',
      img: 'https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1476&q=80',
    },
    {
      id: 4,
      type: 'CASA 217',
      name: 'Joao Carlos',
      img: 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80',
    },
  ];

  return (
    <Container>
      <ViewLogo>
        <Logo width="250" height="90" />
      </ViewLogo>
      <InputArea>
        <TextTitle>PESQUISAR RESIDÊNCIAS</TextTitle>
        <InvitationOptions>
          <InputIcon
            IconSvg={Lupa}
            placeholder="Pesquisar por data, casa ou morador"
            // value={emailField}
            // onChangeText={t => setEmailField(t)}
          />
        </InvitationOptions>

        <ViewGeral>
          <TextTitleInvite>RESIDÊNCIAS</TextTitleInvite>

          <FlatList
            data={DATA}
            renderItem={({item, index}) => (
              <ResidentList
                type={item?.type}
                name={item?.name}
                img={{uri: item?.img}}
                index={index}
              />
            )}
            keyExtractor={item => item?.id}
          />
        </ViewGeral>
        <InvitationPanel>
          <ButtonAddView>
            <IconView>
              <Icon name="plus" size={24} color="white" />
            </IconView>
            <ButtonTextView>
              <ButtonInviteTitleText>
                Adicionar nova residência
              </ButtonInviteTitleText>
              <ButtonInviteText>Clique aqui</ButtonInviteText>
            </ButtonTextView>
          </ButtonAddView>
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
