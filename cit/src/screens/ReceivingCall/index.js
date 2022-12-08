import {useFocusEffect, useNavigation} from '@react-navigation/native';
import React, {useCallback, useState} from 'react';
import {Image, StyleSheet, View} from 'react-native';
//-----------------------Components---------------------------------
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Logo from '../../assets/svg/LogoEscuro.svg';
//-----------------------Services---------------------------------
//-----------------------Styles------------------------------------
import {generallocations} from '../../Services/Locations';
import {
  Container,
  IconColorCallView,
  IconColorMessageView,
  IconImageView,
  IconTextView,
  IconView,
  ViewLogo,
  TitleText,
  AdressText,
  IconContainerView,
  IconMessageText,
  ImageUser,
  ImgCaller,
} from './styles';

export default () => {
  const {navigate, goBack} = useNavigation();
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

  return (
    <Container>
      <ViewLogo>
        <Logo width="250" height="90" />
      </ViewLogo>
      <IconView>
        <TitleText>RECEBENDO CHAMADA</TitleText>
        <AdressText>Condominio Alpes do Himalaia</AdressText>
      </IconView>
      <ImageUser>
        <ImgCaller
          source={{
            uri: 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
          }}
        />
      </ImageUser>
      <IconContainerView>
        <IconImageView>
          <IconColorCallView>
            <Icon name="phone" size={65} color="white" />
          </IconColorCallView>
          <IconMessageText>ATENDER</IconMessageText>
        </IconImageView>
        <IconTextView onPress={() => goBack()}>
          <IconColorMessageView>
            <Icon name="close" size={70} color="white" />
          </IconColorMessageView>
          <IconMessageText>RECUSAR</IconMessageText>
        </IconTextView>
      </IconContainerView>
    </Container>
  );
};
