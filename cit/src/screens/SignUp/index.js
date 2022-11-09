import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {
  ButtonArea,
  ButtonBack,
  Container,
  InputArea,
  LogoArea,
  Scroller,
  TextBack,
  TextInput,
} from './styles';

import Logo from '../../assets/svg/Logo.svg';
import InputCustom from '../../components/InputCustom';

import ButtonCustom from '../../components/ButtonCustom';

import {Colors} from '../../config/Colors';

export default () => {
  const {navigate, goBack} = useNavigation();
  const [isLoading, setIsLoading] = useState(false);
  const [selected, setSelected] = useState('');
  const [hidePass, setHidePass] = useState(false);
  const [hidePassConfirm, setHidePassConfirm] = useState(false);
  const [showAddress, setShowAddress] = useState(false);
  const [showPro, setShowPro] = useState(false);
  const [showUser, setShowUser] = useState(true);

  const handleBackButton = () => {
    navigate('IntroductionScreen');
  };
  const handleBack = () => {
    goBack();
  };

  return (
    <Container>
      <ButtonBack onPress={handleBack}>
        <Icon name="menu-left" size={35} color={Colors.textColorLight} />
        <TextBack>Voltar</TextBack>
      </ButtonBack>

      <LogoArea>
        <Logo width="100" height="100" />
      </LogoArea>
      <Scroller>
        <InputArea>
          <TextInput>Nome</TextInput>
          <InputCustom
            placeholder="Digite seu nome"
            // value={farmaceutico.nome}
            // onChangeText={t => setFarmaceutico({ ...farmaceutico, nome: t })}
          />
          <TextInput>E-mail</TextInput>
          <InputCustom
            placeholder="Digite seu e-mail"
            // value={user.email}
            // onChangeText={t => setUser({ ...user, email: t })}
          />
          <TextInput>Telefone</TextInput>

          <TextInput>Data Aniversário</TextInput>
          <InputCustom
            placeholder="Aniversário"
            // value={user.email}
            // onChangeText={t => setUser({ ...user, email: t })}
          />
          <TextInput>Criar Senha</TextInput>
          <InputCustom
            typeInput="password"
            placeholder="Senha"
            secureTextEntry
            // value={user.password}
            // onChangeText={(t) => setUser({ ...user, password: t })}
            password={hidePass ? false : true}
            onPress={() => setHidePass(!hidePass)}
          />
          <TextInput>Confirmar Senha</TextInput>
          <InputCustom
            typeInput="password"
            placeholder="Confirmar Senha"
            secureTextEntry
            // value={user.password}
            // onChangeText={(t) => setUser({ ...user, password: t })}
            password={hidePass ? false : true}
            onPress={() => setHidePass(!hidePass)}
          />
        </InputArea>
      </Scroller>
      <ButtonArea>
        <ButtonCustom
          title="Criar Conta"
          loading={isLoading}
          bgcolor={Colors.textColorLight}
          color={Colors.black}
          onPress={handleBackButton}
        />
      </ButtonArea>
    </Container>
  );
};
