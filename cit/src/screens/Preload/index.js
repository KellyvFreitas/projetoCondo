import React, {useEffect, useContext} from 'react';
import {UserContext} from '../../contexts/UserContext';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useNavigation} from '@react-navigation/native';
import Mensagem from '../../Services/Mensagem';
import {apiServices} from '../../Services/Auth';
import {Colors} from '../../config/Colors';
import Logo from '../../assets/svg/Logo.svg';
import {Container, LoadingIcon} from './styles';

export default () => {
  const {dispatch: userDispatch} = useContext(UserContext);
  const navigation = useNavigation();

  // const checkToken = async () => {
  //   const token = await AsyncStorage.getItem('token');
  //   if (token) {
  //     let res = await apiServices.checkToken(token);
  //     console.log('res', res);
  //     if (res.success) {
  //       const user = JSON.parse(await AsyncStorage.getItem('user'));
  //       userDispatch({
  //         type: 'SET_USER',
  //         payload: {
  //           email: user.email,
  //           id: user.id,
  //           cliente: user.cliente,
  //         },
  //       });
  //       navigation.reset({
  //         routes: [{ name: 'MainDrawer' }],
  //       });
  //     } else {
  //       Mensagem.exibirFalha(res.errors[0]);
  //     }
  //   }

  //   if (!token) {
  //     navigation.reset({
  //       routes: [{ name: 'OnBoarding' }],
  //     });
  //   }
  // };
  useEffect(() => {
    setTimeout(() => {
      navigation.reset({
        routes: [{name: 'SelectProfile'}],
      });
    }, 3000);
  }, []);

  return (
    <Container>
      <Logo width="250" height="250" />
      <LoadingIcon size="large" color={Colors.primary} />
    </Container>
  );
};
