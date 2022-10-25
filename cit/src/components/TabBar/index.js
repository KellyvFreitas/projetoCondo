import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useNavigation } from '@react-navigation/native';

import { Colors } from '../../config/Colors';

import {
  Container,
  MenuButton,
  MenuButtonText,
} from './styles';


const TabBar = ({ categories, onPress }) => {

  const { navigate } = useNavigation()


  const menus = [
    {
      title: 'Suporte',
      icon: <Icon name="face-agent" size={33} color={Colors.ButtonSecondary} />,
      screen: 'Home',
    },
    {
      title: 'Contrate',
      icon: <Icon name="cart-outline" size={33} color={Colors.ButtonSecondary} />,
      screen: 'SignUp',
    },
    {
      title: 'Termos e Condições',
      icon: <Icon name="book-open-variant" size={33} color={Colors.ButtonSecondary} />,
      screen: 'Home',
    }
  ];

  return (
    <Container>
      {menus.map((item, index) => (
        <>
          <MenuButton
            key={index}
            onPress={() => navigate(item.screen)}>
            {item.icon}
            <MenuButtonText>{item.title}</MenuButtonText>
          </MenuButton>
        </>
      ))}
    </Container>
  );
}
export default TabBar