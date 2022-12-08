import React, {useState, useEffect, useCallback} from 'react';
import {useNavigation} from '@react-navigation/native';
import {Keyboard} from 'react-native';
import {
  Container,
  ViewBack,
  ButtonBack,
  TextBack,
  LogoArea,
  Scroller,
  InputArea,
  TextInput,
  ButtonArea,
} from './styles';
import Eye from '../../assets/icons/eye.svg';
import EyeOff from '../../assets/icons/eyeOff.svg';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import Logo from '../../assets/svg/Logo.svg';
import InputCustom from '../../components/InputCustom';
import MaskedCell from '../../components/InputCellphone';

import {apiServices} from '../../Services/Auth';
import Mensagem from '../../Services/Mensagem';
import Header from '../../components/Header';
import BackIcon from '../../assets/icons/arrow-left.svg';

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
  // const [user, setUser] = useState({
  //   email: 'trixx@gmail.com',
  //   password: 'Teste@01',
  //   confirmPassword: 'Teste@01',
  // });

  // const [farmaceutico, setFarmaceutico] = useState({
  //   nome: 'Trixx',
  //   sobrenome: 'Tfs',
  //   cpf: '12345678910',
  //   rg: '12345',
  //   crf: '1234',
  //   crfEstado: 'DF',
  //   telefone: '61998322970',
  //   farmacia: 'Farma',
  //   valorConsulta: 100,
  // });
  // const handleButtonStep = step => {
  //   if (step === 'first') {
  //     if (
  //       user.email == '' ||
  //       user.password == '' ||
  //       user.confirmPassword == '' ||
  //       farmaceutico.nome == '' ||
  //       farmaceutico.sobrenome == ''

  //     ) {
  //       Mensagem.exibirInfo('Preencha os campos');
  //       return;
  //     }
  //     return setShowUser(false) || setShowPro(true);
  //   }
  //   if (step === 'second') {
  //     if (
  //       farmaceutico.cpf == '' ||
  //       farmaceutico.telefone == '' ||
  //       farmaceutico.rg == '' ||
  //       farmaceutico.crf == '' ||
  //       farmaceutico.crfEstado == '' ||
  //       farmaceutico.farmacia == '' ||
  //       farmaceutico.valorConsulta == ''
  //     ) {
  //       Mensagem.exibirInfo('Preencha os campos');
  //       return;
  //     }
  //     return setShowPro(false) || setShowAddress(true);
  //   }
  //   if (step === 'third') {
  //     if (
  //       endereco.cep == '' ||
  //       endereco.logradouro == '' ||
  //       endereco.numero == '' ||
  //       endereco.bairro == '' ||
  //       endereco.cidade == '' ||
  //       endereco.uf == ''
  //     ) {
  //       Mensagem.exibirInfo('Preencha os campos');
  //       return;
  //     }
  //   }
  // };
  // useEffect(() => {
  //   fetchAddr();
  // }, [fetchAddr, endereco.cep]);

  // const handleCadastrar = async () => {
  //   setSelected('');
  //   try {
  //     Keyboard.dismiss();
  //     setIsLoading(true);
  //     let dados = {
  //       email: user.email,
  //       password: user.password,
  //       confirmPassword: user.confirmPassword,
  //       farmaceutico: {
  //         nome: farmaceutico.nome,
  //         sobrenome: farmaceutico.sobrenome,
  //         telefone: farmaceutico.telefone,
  //         cpf: farmaceutico.cpf,
  //         rg: farmaceutico.rg,
  //         crf: farmaceutico.crf,
  //         crfEstado: farmaceutico.crfEstado,
  //         farmacia: farmaceutico.farmacia,
  //         valorConsulta: farmaceutico.valorConsulta,
  //         endereco: {
  //           cep: endereco.cep,
  //           logradouro: endereco.logradouro,
  //           numero: endereco.numero,
  //           complemento: endereco.complemento,
  //           referencia: endereco.referencia,
  //           bairro: endereco.bairro,
  //           cidade: endereco.cidade,
  //           uf: endereco.uf,
  //         },
  //       },
  //     };
  //     let response = await apiServices.registerFarmaceutico(dados);
  //     console.log('DADOS:::ENVIADOS', JSON.stringify(response));

  //     if (response.success) {
  //       Mensagem.exibirInfo(
  //         'Cadastro concluído com sucesso! Realize agora o seu login com os dados criados.',
  //       );
  //       navigation.navigate('SignIn');
  //     } else {
  //       Mensagem.exibirInfo(response.errors[0]);
  //     }
  //   } catch (error) {
  //     console.error('SIGNIN::HANDLESIGNIN', error);
  //     Mensagem.exibirErro(error);
  //   } finally {
  //     setIsLoading(false);
  //   }
  // };

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
          <MaskedCell
            // value={farmaceutico.telefone}
            // onChangeText={t =>
            //   setFarmaceutico({ ...farmaceutico, telefone: t })
            // }
            placeholder="Digite seu telefone"
          />
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
            IconSvg={hidePass ? EyeOff : Eye}
            onPress={() => setHidePass(!hidePass)}
          />
          <TextInput>Confirmar Senha</TextInput>
          <InputCustom
            typeInput="password"
            placeholder="Senha"
            secureTextEntry
            // value={user.password}
            // onChangeText={(t) => setUser({ ...user, password: t })}
            password={hidePass ? false : true}
            IconSvg={hidePass ? EyeOff : Eye}
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
