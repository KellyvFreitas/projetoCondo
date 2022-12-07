import React from 'react';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {Colors} from '../../config/Colors';
import LogoCit from '../../assets/svg/LogoCIT.svg';

import {
  Container,
  Logo,
  ViewLogo,
  Button,
  ButtonAdmin,
  TitleButton,
} from './styles';
import {View} from 'react-native';

export default () => {
  const {navigate} = useNavigation();

  return (
    <Container>
      <ViewLogo>
        <LogoCit width="350" height="120" />
      </ViewLogo>

      <Button>
        <ButtonAdmin>
          <TitleButton onPress={() => navigate('SignIn')}>
            Administrador
          </TitleButton>
        </ButtonAdmin>
      </Button>

      <Button>
        <ButtonAdmin>
          <TitleButton onPress={() => navigate('SignIn')}>Morador</TitleButton>
        </ButtonAdmin>
      </Button>
    </Container>
  );
};
