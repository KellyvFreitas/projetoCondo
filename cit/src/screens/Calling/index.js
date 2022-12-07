import {useFocusEffect, useNavigation} from '@react-navigation/native';
import React, {useCallback, useState} from 'react';
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
  ChangeIdeaText,
  IconMessageText,
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
        <TitleText>DISCANDO...</TitleText>
        <AdressText>Condominio Alpes do Himalaia</AdressText>

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
