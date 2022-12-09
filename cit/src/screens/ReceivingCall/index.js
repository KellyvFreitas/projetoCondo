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

export default ({route}) => {
  const {navigate, goBack} = useNavigation();
  const [location, setLocation] = useState();
  const contact = route.params;

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
        <AdressText>{contact.title}</AdressText>
      </IconView>
      <ImageUser>
        <ImgCaller
          source={{
            uri: contact.image,
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
