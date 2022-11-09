import React, {useState, useContext} from 'react';
import {useNavigation} from '@react-navigation/native';
import {Button, Keyboard, ScrollView, Text, View} from 'react-native';
//-----------------------Components---------------------------------
import Eye from '../../assets/icons/eye.svg';
import EyeOff from '../../assets/icons/eyeOff.svg';
import {UserContext} from '../../contexts/UserContext';
import {Colors} from '../../config/Colors';
import Logo from '../../assets/svg/Logo.svg';
import InputCustom from '../../components/InputCustom';
import ButtonCustom from '../../components/ButtonCustom';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
//-----------------------Services---------------------------------
import {apiServices} from '../../Services/Auth';
import Mensagem from '../../Services/Mensagem';
import {notification} from '../../Services/notification';
//-----------------------Styles------------------------------------
import {
  Container,
  ViewLogo,
  InputArea,
  ViewPassword,
  TextForgotPassword,
  ViewTabBar,
  ForgetPasswordTouchable,
  ViewBar,
  ButtonLogin,
  TryAgainView,
  NotFoundText,
  TryAgainText,
} from './styles';
import TabBar from '../../components/TabBar';

export default () => {
  const navigation = useNavigation();
  const {dispatch: userDispatch} = useContext(UserContext);
  const [isLoading, setIsLoading] = useState(false);
  const [selected, setSelected] = useState('');
  const [hidePass, setHidePass] = useState(false);
  const [user, setUser] = useState('');
  const [errorPassword, setErrorPassword] = useState(false);

  const {navigate} = useNavigation();

  function handleSignUp() {
    if (user === 'admin') {
      navigation.navigate('HomeAdmin');
      setErrorPassword(false);
    } else if (user === 'user') {
      navigation.navigate('HomeResident');
      setErrorPassword(false);
    } else {
      setErrorPassword(true);
    }
  }

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
  // const handleHomeButton = () => {
  //   navigation.navigate('MainDrawer');
  // };

  const menus = [
    {
      id: 1,
      title: 'Suporte',
      icon: <Icon name="face-agent" size={33} color={Colors.ButtonSecondary} />,
      screen: 'FAQ',
    },
    {
      id: 2,
      title: 'Contrate',
      icon: (
        <Icon name="cart-outline" size={33} color={Colors.ButtonSecondary} />
      ),
      screen: 'SignUp',
    },
    {
      id: 3,
      title: 'Termos e Condições',
      icon: (
        <Icon
          name="book-open-variant"
          size={33}
          color={Colors.ButtonSecondary}
        />
      ),
      screen: 'TermsConditions',
    },
  ];

  return (
    <Container>
      <ScrollView>
        <ViewLogo>
          <Logo width="150" height="150" />
        </ViewLogo>

        <InputArea>
          {errorPassword ? (
            <TryAgainView>
              <NotFoundText>USUÁRIO NÃO ENCONTRADO/CADASTRADO</NotFoundText>
              <TryAgainText>Gostaria de tentar novamente?</TryAgainText>
            </TryAgainView>
          ) : (
            <View>
              <Text></Text>
            </View>
          )}

          {/* <InputText>E-mail</InputText> */}
          <InputCustom
            placeholder="Login ou Número do Telefone"
            autoCapitalize="none"
            onChangeText={t => setUser(t)}
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
            <ForgetPasswordTouchable onPress={() => navigate('ForgetPassword')}>
              <TextForgotPassword>Esqueci minha senha</TextForgotPassword>
            </ForgetPasswordTouchable>

            <ButtonLogin
              title="Entrar"
              // onPress={() => navigate('HomeResident')}
              onPress={() => handleSignUp()}
            />
          </ViewPassword>
        </InputArea>
      </ScrollView>
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
