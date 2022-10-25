import React, { useState, useContext } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Keyboard } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
//-----------------------Components---------------------------------
import Eye from '../../assets/icons/eye.svg';
import EyeOff from '../../assets/icons/eyeOff.svg';
import { UserContext } from '../../contexts/UserContext';
import { Colors } from '../../config/Colors';
import Logo from '../../assets/svg/Logo-noback.svg';
import InputCustom from '../../components/InputCustom';
import ButtonCustom from '../../components/ButtonCustom';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
//-----------------------Services---------------------------------
import { apiServices } from '../../Services/Auth';
import Mensagem from '../../Services/Mensagem';
import { notification } from '../../Services/notification';
//-----------------------Styles------------------------------------
import {
  Container,
  ViewLogo,
  InputArea,
  ViewPassword,
  TextForgotPassword,
  ViewTabBar,
  ViewTermsAndConditions,
  TextTerms,
} from './styles';
import TabBar from '../../components/TabBar';

export default () => {
  const { navigate } = useNavigation();

  const menus = [
    {
      id: 1,
      title: 'Suporte',
      icon: <Icon name="face-agent" size={33} color={Colors.ButtonSecondary} />,
      screen: 'Home',
    },
    {
      id: 2,
      title: 'Contrate',
      icon: <Icon name="cart-outline" size={33} color={Colors.ButtonSecondary} />,
      screen: 'SignUp',
    },
    {
      id: 3,
      title: 'Termos e Condições',
      icon: <Icon name="book-open-variant" size={33} color={Colors.ButtonSecondary} />,
      screen: 'Home',
    },
  ];


  return (
    <Container>
      <ViewLogo>
        <Logo width="250" height="250" />
      </ViewLogo>

      <ViewTermsAndConditions>
        <TextTerms>
          At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore
          At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore
          At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore
        </TextTerms>
      </ViewTermsAndConditions>

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
