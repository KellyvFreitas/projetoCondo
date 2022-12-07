import {useFocusEffect, useNavigation} from '@react-navigation/native';
import {
  View,
  SafeAreaView,
  StyleSheet,
  Text,
  Platform,
  UIManager,
} from 'react-native';
import React, {useCallback, useState, useEffect} from 'react';
//-----------------------Components---------------------------------
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Logo from '../../assets/svg/LogoEscuro.svg';
import InputCustom from '../../components/InputCustom';
import InputIcon from '../../components/InputIcon';
import TabBar from '../../components/TabBar';
import {Colors} from '../../config/Colors';
//-----------------------Services---------------------------------
//-----------------------Styles------------------------------------
import {generallocations} from '../../Services/Locations';
import {
  Container,
  ViewLogo,
  ViewTabBar,
  InputArea,
  InvitationOptions,
  TextTest,
  ViewListChat,
  TitleMessage,
  BadgeMessage,
  ViewChat,
  ImageChat,
  ViewChatUserInfo,
  TextChatUserHouse,
  TextChatUserName,
  ViewChatDateInfo,
  TextDate,
  TextHour,
  ViewTitleChat,
  ViewChatHouseName,
} from './styles';

import Lupa from '../../assets/svg/lupa.svg';

import {
  Collapse,
  CollapseHeader,
  CollapseBody,
  AccordionList,
} from 'accordion-collapse-react-native';

export default () => {
  const {navigate} = useNavigation();
  const [location, setLocation] = useState();

  const handleGetLocations = async () => {
    const response = await generallocations.locations;
    // console.log('\n\nRESPONSE-LOCATION', JSON.stringify(response));
    setLocation(response);
  };

  useFocusEffect(
    useCallback(() => {
      handleGetLocations();
    }, []),
  );

  const menus = [
    {
      id: 1,
      title: 'Inicio',
      icon: (
        <Icon name="home-outline" size={33} color={Colors.ButtonSecondary} />
      ),
      screen: 'HomeResident',
    },
    {
      id: 2,
      title: 'Suporte',
      icon: <Icon name="face-agent" size={33} color={Colors.ButtonSecondary} />,
      screen: 'FAQLogged',
    },
    {
      id: 3,
      title: 'Termos e Cond.',
      icon: (
        <Icon
          name="book-open-variant"
          size={33}
          color={Colors.ButtonSecondary}
        />
      ),
      screen: 'TermsConditionsLogged',
    },
    {
      id: 4,
      title: 'Perfil',
      icon: (
        <Icon name="account-outline" size={33} color={Colors.ButtonSecondary} />
      ),
      screen: 'ProfileResident',
    },
  ];

  const data = [
    {
      id: 0,
      casa: 'Casa 57',
      nome: 'Edinelza Mascarenhas',
      data: '2022-09-01T18:38:00',
      mensagemNaoLida: false,
      image:
        'https://www.psicologosberrini.com.br/wp-content/uploads/10-dicas-de-saude-mental-para-mulheres-768x576.jpg',
      messagens: [
        {
          user: 0,
          message:
            'Gostaria de informar que minha irmã está chegando em um Uber cinza de placaPK13A2',
          data: '2022-09-01T18:38:00',
        },
        {
          user: 1,
          message:
            'Tudo bem. Assim que ela chegar eu também envio uma mensagem para a senhora',
          data: '2022-09-01T18:38:00',
        },
      ],
    },
    {
      id: 1,
      casa: 'Casa 132',
      nome: 'Bernardo Vieira',
      data: '2022-09-01T18:38:00',
      mensagemNaoLida: true,
      image:
        'https://img.freepik.com/fotos-gratis/homem-bonito-e-confiante-sorrindo-com-as-maos-cruzadas-no-peito_176420-18743.jpg?w=740&t=st=1670330580~exp=1670331180~hmac=94becaebb1f9e80ed5b71c0ff169336606e905b76937baf970d1e8c289d64a11',
      messagens: [
        {
          user: 0,
          message:
            'Gostaria de informar que minha irmã está chegando em um Uber cinza de placaPK13A2',
          data: '2022-09-01T18:38:00',
        },
        {
          user: 1,
          message:
            'Tudo bem. Assim que ela chegar eu também envio uma mensagem para a senhora',
          data: '2022-09-01T18:38:00',
        },
      ],
    },
    {
      id: 2,
      casa: 'Casa 57',
      nome: 'Edinelza Mascarenhas',
      data: '2022-09-01T18:38:00',
      mensagemNaoLida: false,
      image:
        'https://www.psicologosberrini.com.br/wp-content/uploads/10-dicas-de-saude-mental-para-mulheres-768x576.jpg',
      messagens: [
        {
          user: 0,
          message:
            'Gostaria de informar que minha irmã está chegando em um Uber cinza de placaPK13A2',
          data: '2022-09-01T18:38:00',
        },
        {
          user: 1,
          message:
            'Tudo bem. Assim que ela chegar eu também envio uma mensagem para a senhora',
          data: '2022-09-01T18:38:00',
        },
      ],
    },
    {
      id: 3,
      casa: 'Casa 132',
      nome: 'Bernardo Vieira',
      data: '2022-09-01T18:38:00',
      mensagemNaoLida: true,
      image:
        'https://img.freepik.com/fotos-gratis/homem-bonito-e-confiante-sorrindo-com-as-maos-cruzadas-no-peito_176420-18743.jpg?w=740&t=st=1670330580~exp=1670331180~hmac=94becaebb1f9e80ed5b71c0ff169336606e905b76937baf970d1e8c289d64a11',
      messagens: [
        {
          user: 0,
          message:
            'Gostaria de informar que minha irmã está chegando em um Uber cinza de placaPK13A2',
          data: '2022-09-01T18:38:00',
        },
        {
          user: 1,
          message:
            'Tudo bem. Assim que ela chegar eu também envio uma mensagem para a senhora',
          data: '2022-09-01T18:38:00',
        },
      ],
    },
    {
      id: 4,
      casa: 'Casa 57',
      nome: 'Edinelza Mascarenhas',
      data: '2022-09-01T18:38:00',
      mensagemNaoLida: false,
      image:
        'https://www.psicologosberrini.com.br/wp-content/uploads/10-dicas-de-saude-mental-para-mulheres-768x576.jpg',
      messagens: [
        {
          user: 0,
          message:
            'Gostaria de informar que minha irmã está chegando em um Uber cinza de placaPK13A2',
          data: '2022-09-01T18:38:00',
        },
        {
          user: 1,
          message:
            'Tudo bem. Assim que ela chegar eu também envio uma mensagem para a senhora',
          data: '2022-09-01T18:38:00',
        },
      ],
    },
  ];

  useEffect(() => {
    if (Platform.OS === 'android') {
      if (UIManager.setLayoutAnimationEnabledExperimental) {
        UIManager.setLayoutAnimationEnabledExperimental(true);
      }
    }
  }, []);

  const [quantityConversation, setQuantityConversation] = useState(3);

  return (
    <Container>
      <ViewLogo>
        <Logo width="250" height="90" />
      </ViewLogo>
      <InputArea>
        <InvitationOptions>
          <InputIcon
            IconSvg={Lupa}
            placeholder="Pesquisar por data, casa ou morador"
            // value={emailField}
            // onChangeText={t => setEmailField(t)}
          />
        </InvitationOptions>
      </InputArea>

      <ViewListChat>
        <ViewTitleChat>
          <TitleMessage>MENSAGENS</TitleMessage>
          <BadgeMessage>{quantityConversation} NÃO LIDAS</BadgeMessage>
        </ViewTitleChat>
        <View>
          {data.map(chat => (
            <ViewChat
              onPress={() => navigate('MessageChat', chat)}
              key={chat.id}
              style={{
                backgroundColor: chat.mensagemNaoLida ? 'gray' : '#e7e7e7',
              }}>
              <ViewChatUserInfo>
                <ImageChat
                  source={{
                    uri: chat.image,
                  }}></ImageChat>
                <ViewChatHouseName>
                  <TextChatUserHouse
                    style={{
                      color: chat.mensagemNaoLida ? '#fff' : 'gray',
                    }}>
                    {chat?.casa}
                  </TextChatUserHouse>
                  <TextChatUserName
                    style={{
                      color: chat.mensagemNaoLida ? '#fff' : 'gray',
                    }}>
                    {chat?.nome}
                  </TextChatUserName>
                </ViewChatHouseName>
              </ViewChatUserInfo>
              <ViewChatDateInfo>
                <TextDate
                  style={{
                    color: chat.mensagemNaoLida ? '#fff' : 'gray',
                  }}>
                  {chat?.data.split('T')[0]}
                </TextDate>
                <TextHour
                  style={{
                    color: chat.mensagemNaoLida ? '#fff' : 'gray',
                  }}>
                  {chat?.data.split('T')[1]}
                </TextHour>
              </ViewChatDateInfo>
            </ViewChat>
          ))}
        </View>
      </ViewListChat>
      {/*
      <ViewInterative>
        <AccordionList
          data={data}
          customTitle={item => <Text>{item.title}</Text>}
          customBody={item => <Text>{item.body}</Text>}
          animationDuration={400}
        />
      </ViewInterative> */}

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
