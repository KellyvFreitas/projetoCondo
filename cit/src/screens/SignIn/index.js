import React, { useState, useContext } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Button, Keyboard } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
//-----------------------Components---------------------------------
import Eye from '../../assets/icons/eye.svg';
import EyeOff from '../../assets/icons/eyeOff.svg';
import { UserContext } from '../../contexts/UserContext';
import { Colors } from '../../config/Colors';
import Logo from '../../assets/svg/Logo.svg';
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
  FlatListBar,
  ViewBar,
  ButtonLogin,
} from './styles';
import TabBar from '../../components/TabBar';

export default () => {
  const navigation = useNavigation();
  const { dispatch: userDispatch } = useContext(UserContext);
  const [isLoading, setIsLoading] = useState(false);
  const [selected, setSelected] = useState('');
  const [hidePass, setHidePass] = useState(false);

  const { navigate } = useNavigation()


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
      screen: 'TermsConditions',
    },
  ];


  return (
    <Container>
      <ViewLogo>
        <Logo width="150" height="150" />
      </ViewLogo>

      <InputArea>
        {/* <InputText>E-mail</InputText> */}
        <InputCustom
          placeholder="Login ou Número do Telefone"
          autoCapitalize="none"
        // value={user.email}    
        // onChangeText={(t) => setUser({ ...user, email: t })}
        // onPressIn={() => setSelected('email')}
        />
        <InputCustom
          typeInput="password"
          placeholder="Senha"
          secureTextEntry
          // value={user.password}
          // onChangeText={(t) => setUser({ ...user, password: t })}
          password={hidePass ? false : true}
          onPress={() => setHidePass(!hidePass)}
        />
        <ViewPassword>

          <TextForgotPassword>
            Esqueceu sua senha ?
          </TextForgotPassword>

          <ButtonLogin
           title='Entrar'
            onPress={() => navigate('HomeResident')}
           />

        </ViewPassword>
      </InputArea>

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
