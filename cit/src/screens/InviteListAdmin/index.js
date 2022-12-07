import {useFocusEffect, useNavigation} from '@react-navigation/native';
import React, {useCallback, useState} from 'react';
import {Image, ScrollView, StyleSheet, TouchableOpacity} from 'react-native';
//-----------------------Components---------------------------------
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Logo from '../../assets/svg/LogoEscuro.svg';
import InputIcon from '../../components/InputIcon';
import TabBar from '../../components/TabBar';
import {Colors} from '../../config/Colors';
//-----------------------Services---------------------------------
//-----------------------Styles------------------------------------
import {generallocations} from '../../Services/Locations';
import {
  Container,
  InputArea,
  InvitationOptions,
  NameDateText,
  NameHourText,
  NamePersonText,
  NameTitleText,
  TextNamePersonView,
  TextTitle,
  TextTitleInvite,
  ViewDateTable,
  ViewGeneral,
  ViewGeral,
  ViewIcon,
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

import * as Animatable from 'react-native-animatable';

import Accordion from 'react-native-collapsible/Accordion';

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
      screen: 'HomeAdmin',
    },
    {
      id: 2,
      title: 'Gravações',
      icon: <Icon name="microphone" size={33} color={Colors.ButtonSecondary} />,
      screen: 'Recordings',
    },
    {
      id: 3,
      title: 'Mensagens',
      icon: (
        <Icon
          name="message-processing-outline"
          size={33}
          color={Colors.ButtonSecondary}
        />
      ),
      screen: 'MessagesAdmin',
    },
    {
      id: 4,
      title: 'Admins',
      icon: (
        <Icon name="account-outline" size={33} color={Colors.ButtonSecondary} />
      ),
      screen: 'Administrators',
    },
  ];

  const CONTENT = [
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

  const [activeSections, setActiveSections] = useState([]);
  const [collapsed, setCollapsed] = useState(true);
  const [multipleSelect, setMultipleSelect] = useState(false);

  const setSections = sections => {
    //setting up a active section state
    setActiveSections(sections.includes(undefined) ? [] : sections);
  };

  const renderHeader = (section, _, isActive) => {
    //Accordion Header view
    return (
      <Animatable.View
        duration={400}
        style={[styles.header, isActive ? styles.active : styles.inactive]}
        transition={['backgroundColor', 'color']}>
        <ViewGeneral>
          <ViewTitleTable>
            <ViewIcon>
              <Image
                style={{width: 40, height: 40, borderRadius: 20}}
                source={{uri: section.img}}
              />
            </ViewIcon>
            <TextNamePersonView>
              <NameTitleText>{section.type}</NameTitleText>
              <NamePersonText>{section.name}</NamePersonText>
            </TextNamePersonView>
          </ViewTitleTable>
          <ViewDateTable>
            <NameDateText>{section.date}</NameDateText>
            <NameHourText>{section.hour}</NameHourText>
          </ViewDateTable>
        </ViewGeneral>
      </Animatable.View>
    );
  };

  const renderContent = (section, _, isActive) => {
    //Accordion Content view
    return (
      <Animatable.View
        duration={400}
        style={[styles.content, isActive ? styles.active : styles.inactive]}
        transition={['backgroundColor', 'color']}>
        <Animatable.Text
          animation={isActive ? 'bounceIn' : undefined}
          style={{textAlign: 'left', color: 'white'}}>
          {section.content}
        </Animatable.Text>
      </Animatable.View>
    );
  };

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

        <ViewGeral>
          <TextTitleInvite>CONVITES</TextTitleInvite>

          <ScrollView>
            <Accordion
              activeSections={activeSections}
              //for any default active section
              sections={CONTENT}
              //title and content of accordion
              touchableComponent={TouchableOpacity}
              //which type of touchable component you want
              //It can be the following Touchables
              //TouchableHighlight, TouchableNativeFeedback
              //TouchableOpacity , TouchableWithoutFeedback
              expandMultiple={false}
              //Do you want to expand mutiple at a time or single at a time
              renderHeader={renderHeader}
              //Header Component(View) to render
              renderContent={renderContent}
              //Content Component(View) to render
              duration={100}
              //Duration for Collapse and expand
              onChange={setSections}
              //setting the state of active sections
            />
          </ScrollView>
        </ViewGeral>
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

const styles = StyleSheet.create({
  header: {
    padding: 10,
    color: '#8f8f8f',
  },
  headerText: {
    textAlign: 'center',
    fontSize: 16,
    fontWeight: '500',
  },
  content: {
    padding: 20,
    backgroundColor: '#e3e3e3',
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
  },
  active: {
    backgroundColor: '#8f8f8f',
  },
  inactive: {
    backgroundColor: '#e3e3e3',
    color: '#8f8f8f',
  },
  tinyLogo: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
});
