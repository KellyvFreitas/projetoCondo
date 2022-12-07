import React, { useContext } from 'react';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { UserContext } from '../../contexts/UserContext';
import {
  DrawerArea,
  DrawerLogoArea,
  DrawerScroller,
  ViewProfile,
  ImageProfile,
  TextProfile,
  FooterArea,
  FooterInfo,
  MenuButton,
  MenuSquare,
  MenuButtonText,
  ButtonBack,
  ButtonBackText,
  AreaVersionApp,
  VersionApp,
  Divider,
} from './styles';

import Logo from '../../assets/svg/Logo.svg';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Colors } from '../../config/Colors';

export default props => {
  const navigation = useNavigation();
  const { dispatch } = useContext(UserContext);

  const menus = [
    {
      title: 'Perfil',
      icon: <Icon name="account-outline" size={25} color={Colors.tertiary} />,
      screen: 'Profile',
    },
    {
      title: 'Favoritos',
      icon: <Icon name="heart-outline" size={25} color={Colors.tertiary} />,
      screen: 'FavoritesScreen',
    },
    {
      title: 'Pedidos',
      icon: <Icon name="book-open-variant" size={25} color={Colors.tertiary} />,
      screen: 'Home',
    },
    {
      title: 'Notificação',
      icon: <Icon name="bell-outline" size={25} color={Colors.tertiary} />,
      screen: 'Home',
    },
    {
      title: 'Cupons',
      icon: <Icon name="ticket-percent-outline" size={25} color={Colors.tertiary} />,
      screen: 'Home',
    },
    {
      title: 'Cartão Fidelidade',
      icon: <Icon name="card-account-details-star-outline" size={25} color={Colors.tertiary} />,
      screen: 'Home',
    },
  ];

  const handleLogoutClick = async () => {
    await AsyncStorage.clear();
    dispatch({
      type: 'CLEAR_USER',
    });
    navigation.reset({
      routes: [{ name: 'SignIn' }],
    });
  };

  return (

    <DrawerArea>
      <ViewProfile>
        <ImageProfile source={{
          uri: 'https://st4.depositphotos.com/4157265/41100/i/450/depositphotos_411005388-stock-photo-profile-picture-of-smiling-30s.jpg',
        }}
        />
        <TextProfile>
          Felipe Buch
        </TextProfile>
      </ViewProfile>
      <Divider />
      <DrawerScroller>
        {menus.map((item, index) => (
          <>
            <MenuButton
              key={index}
              onPress={() => navigation.navigate(item.screen)}>
              <MenuSquare></MenuSquare>
              {item.icon}
              <MenuButtonText>{item.title}</MenuButtonText>
            </MenuButton>
            <Divider />
          </>
        ))}
      </DrawerScroller>


      <FooterArea>
        <FooterInfo>
          <Icon name="exit-to-app" size={30} color={Colors.tertiary} />
          <ButtonBack onPress={handleLogoutClick}>
            <MenuSquare></MenuSquare>

            <ButtonBackText>Sair</ButtonBackText>
          </ButtonBack>
        </FooterInfo>
      </FooterArea>
      <AreaVersionApp>
        <VersionApp>tem3bs v0.1</VersionApp>
      </AreaVersionApp>
    </DrawerArea>
  );
};
