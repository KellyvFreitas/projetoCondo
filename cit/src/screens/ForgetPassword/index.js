import {useNavigation} from '@react-navigation/native';
import React, {useContext, useState} from 'react';
//-----------------------Components---------------------------------
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Logo from '../../assets/svg/Logo.svg';
import {Colors} from '../../config/Colors';
import InputCustom from '../../components/InputCustom';
import {UserContext} from '../../contexts/UserContext';
import TabBar from '../../components/TabBar';
//-----------------------Services---------------------------------
//-----------------------Styles------------------------------------
import {
  ButtonLogin,
  Container,
  InputArea,
  TextForgotPassword,
  ViewLogo,
  ViewPassword,
  ViewTabBar,
} from './styles';

export default () => {
  const navigation = useNavigation();
  const {dispatch: userDispatch} = useContext(UserContext);
  const [isLoading, setIsLoading] = useState(false);
  const [selected, setSelected] = useState('');
  const [hidePass, setHidePass] = useState(false);

  const {navigate} = useNavigation();

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
      <ViewLogo>
        <Logo width="150" height="150" />
      </ViewLogo>

      <InputArea>
        {/* <InputText>E-mail</InputText> */}
        <TextForgotPassword>Digite o e-mail cadastrado</TextForgotPassword>
        <InputCustom
          placeholder="seuemail@dominio.com.br"
          autoCapitalize="none"
          // value={user.email}
          // onChangeText={(t) => setUser({ ...user, email: t })}
          // onPressIn={() => setSelected('email')}
        />
        <TextForgotPassword>Confirmar o e-mail cadastrado</TextForgotPassword>
        <InputCustom
          placeholder="seuemail@dominio.com.br"
          autoCapitalize="none"
          // value={user.email}
          // onChangeText={(t) => setUser({ ...user, email: t })}
          // onPressIn={() => setSelected('email')}
        />
        <ViewPassword>
          <ButtonLogin onPress={() => navigate('SignIn')}>
            ENVIAR SOLICITAÇÃO
          </ButtonLogin>
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
