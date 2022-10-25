import React, { useState, useContext } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Keyboard } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
//-----------------------Components---------------------------------
import Eye from '../../assets/icons/eye.svg';
import EyeOff from '../../assets/icons/eyeOff.svg';
import { UserContext } from '../../contexts/UserContext';
import { Colors } from '../../config/Colors';
import Logo from '../../assets/svg/Logo.svg';
import InputCustom from '../../components/InputCustom';
import ButtonCustom from '../../components/ButtonCustom';
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
} from './styles';
import TabBar from '../../components/TabBar';

export default () => {
  const navigation = useNavigation();
  const { dispatch: userDispatch } = useContext(UserContext);
  const [isLoading, setIsLoading] = useState(false);
  const [selected, setSelected] = useState('');
  const [hidePass, setHidePass] = useState(false);

  // const [user, setUser] = useState({
  //   tipo: 3,
  //   email: 'clientetrixx@gmail.com',
  //   password: 'Teste@01',
  // });

  // async function handleSignIn() {
  //   setSelected('');
  //   if (user.email === '' || user.password === '') {
  //     Mensagem.exibirInfo('Preencha os campos');
  //     return;
  //   }
  //   try {
  //     Keyboard.dismiss();
  //     setIsLoading(true);
  //     let dados = {
  //       tipo: user.tipo,
  //       email: user.email,
  //       password: user.password,
  //     };
  //     const response = await apiServices.login(dados);
  //     console.log('\n\nRESPONSE', JSON.stringify(response.data));
  //     if (response.success) {
  //       await AsyncStorage.setItem('token', response.data.token.accessToken);
  //       await AsyncStorage.setItem('user', JSON.stringify(response.data.user));
  //       const { email, id, cliente } = response.data.user;
  //       userDispatch({
  //         type: 'SET_USER',
  //         payload: {
  //           email,
  //           id,
  //           cliente,
  //         },
  //       });

  //       // await handleNotificationPermission();

  //       navigation.reset({
  //         routes: [{ name: 'MainDrawer' }],
  //       });
  //     } else {
  //       Mensagem.exibirInfo(response.errors[0]);
  //     }
  //   } catch (error) {
  //     console.error('SIGNIN::LESIGNIN', error);
  //     // Mensagem.exibirErro(error);
  //   } finally {
  //     setIsLoading(false);
  //   }
  // }
  const handleHomeButton = () => {
    navigation.navigate('MainDrawer');
  };
  const handleSignUp = () => {
    navigation.navigate('SignUp');
  };

  return (
    <Container>
      <ViewLogo>
        <Logo width="150" height="150" />
      </ViewLogo>



    </Container>
  );
};
