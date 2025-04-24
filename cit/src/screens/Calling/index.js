import {useFocusEffect, useNavigation} from '@react-navigation/native';
import React, {useCallback, useState} from 'react';
//-----------------------Components---------------------------------
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Logo from '../../assets/images/Condominio.png';
import { Image } from 'react-native';
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
  ChangeIdeaText,
  IconMessageText,
} from './styles';
import LogoImage from "../../assets/images/Condominio.png";

export default () => {
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
        <Image source={LogoImage} style={{ width: 250, height: 90, resizeMode: 'contain' }} />
      </ViewLogo>

      <IconView>
        <TitleText>DISCANDO...</TitleText>
        <AdressText>{contact.title}</AdressText>

        <IconImageView>
          <IconColorCallView>
            <Icon name="phone" size={75} color="white" />
          </IconColorCallView>
        </IconImageView>
        <AdressText>
          Aguarde, em alguns instantes o porteiro irá atendê-lo!!
        </AdressText>
        <ChangeIdeaText>Mudou de ideia?</ChangeIdeaText>
        <IconTextView onPress={() => goBack()}>
          <IconColorMessageView>
            <Icon name="close" size={60} color="white" />
          </IconColorMessageView>
          <IconMessageText>CANCELAR LIGAÇÃO</IconMessageText>
        </IconTextView>
      </IconView>
    </Container>
  );
};
