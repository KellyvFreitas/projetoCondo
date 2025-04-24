import {useFocusEffect, useNavigation} from '@react-navigation/native';
import React, {useCallback, useState} from 'react';
import {Image, ScrollView, StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
//-----------------------Components---------------------------------

import Logo from '../../assets/images/Condominio.png';
import WaveSound from '../../assets/svg/wave.svg';
import InputIcon from '../../components/InputIcon';
import TabBar from '../../components/TabBar';
import {Colors} from '../../config/Colors';
//-----------------------Services---------------------------------
import {generallocations} from '../../Services/Locations';
//-----------------------Styles------------------------------------
import {
  AudioView,
  Container,
  DownloadAudioOpacity,
  DownloadView,
  InputArea,
  InvitationOptions,
  NameDateText,
  NameHourText,
  NamePersonText,
  NameTitleText,
  PlayOpacity,
  SoundImg,
  TextDownload,
  TextNamePersonView,
  TextTitle,
  TextTitleInvite,
  ViewDateTable,
  ViewGeneral,
  ViewGeral,
  ViewIcon,
  ViewLogo,
  ViewTabBar,
  ViewTitleTable,
  IconReturn,
} from './styles';

import Lupa from '../../assets/svg/lupa.svg';
import * as Animatable from 'react-native-animatable';
import Accordion from 'react-native-collapsible/Accordion';
import LogoImage from "../../assets/images/CondominioLogoEscuro.png";

export default () => {
  const {navigate, goBack} = useNavigation();
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
      title: 'Convites',
      icon: (
        <Icon name="email-outline" size={33} color={Colors.ButtonSecondary} />
      ),
      screen: 'InviteListAdmin',
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
      type: 'CASA 57',
      name: 'Edinelza Mascarenhas',
      date: '01/09/2022',
      hour: '19:44',
      content:
        'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
    },
    {
      type: 'CASA 101',
      name: 'Wagner Perez',
      date: '08/08/2022',
      hour: '14:52',
      content:
        'https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1476&q=80',
    },
    {
      type: 'APT 204',
      name: 'Joao Carlos',
      date: '10/08/2022',
      hour: '14:52',
      content:
        'https://w7.pngwing.com/pngs/336/444/png-transparent-microphone-audio-engineer-android-music-sound-microphone-icon-recording-studio-audio-equipment-sound-recording-and-reproduction.png',
    },
  ];

  const [activeSections, setActiveSections] = useState([]);

  const setSections = sections => {
    setActiveSections(sections.includes(undefined) ? [] : sections);
  };

  const renderHeader = (section, _, isActive) => {
    //Accordion Header view
    return (
      <Animatable.View
        duration={400}
        style={[
          styles.header,
          isActive
            ? {backgroundColor: '#8f8f8f', textColor: 'white'}
            : styles.inactive,
        ]}
        transition={['backgroundColor', 'textColor']}>
        <ViewGeneral>
          <ViewTitleTable>
            <ViewIcon>
              <Icon
                name="microphone"
                size={38}
                color={Colors.ButtonSecondary}
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
    return (
      <Animatable.View
        duration={400}
        style={[styles.content, isActive ? styles.active : styles.inactive]}
        transition={['backgroundColor', 'color']}>
        <Animatable.Text
          animation={isActive ? 'bounceIn' : undefined}
          style={{textAlign: 'left', color: 'white'}}>
          <AudioView>
            <SoundImg>
              <PlayOpacity>
                <Icon name="play" size={25} />
              </PlayOpacity>
              <WaveSound width="260" height="40" />
              <PlayOpacity>
                <Icon name="pause" size={25} />
              </PlayOpacity>
            </SoundImg>
            <DownloadView>
              <DownloadAudioOpacity>
                <TextDownload>Baixar MP3</TextDownload>
              </DownloadAudioOpacity>
            </DownloadView>
          </AudioView>
        </Animatable.Text>
      </Animatable.View>
    );
  };

  return (
    <Container>
      <ViewLogo>
        <Image source={LogoImage} style={{ width: 250, height: 90, resizeMode: 'contain' }} />
      </ViewLogo>

      <IconReturn onPress={() => goBack()}>
        <Icon name="chevron-left-circle" size={25} color="white" />
      </IconReturn>

      <InputArea>
        <TextTitle>PESQUISAR GRAVAÇÕES</TextTitle>
        <InvitationOptions>
          <InputIcon
            IconSvg={Lupa}
            placeholder="Pesquisar por data, casa ou morador"
            // value={emailField}
            // onChangeText={t => setEmailField(t)}
          />
        </InvitationOptions>

        <ViewGeral>
          <TextTitleInvite>GRAVAÇÕES</TextTitleInvite>

          <ScrollView>
            <Accordion
              activeSections={activeSections}
              sections={CONTENT}
              touchableComponent={TouchableOpacity}
              expandMultiple={false}
              renderHeader={renderHeader}
              renderContent={renderContent}
              duration={100}
              onChange={setSections}
            />
          </ScrollView>
        </ViewGeral>
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

const styles = StyleSheet.create({
  header: {
    padding: 10,
    backgroundColor: '#8f8f8f',
  },
  headerText: {
    textAlign: 'center',
    fontSize: 16,
    fontWeight: '500',
  },
  content: {
    padding: 15,
    backgroundColor: '#e3e3e3',
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
  },
  active: {
    backgroundColor: '#8f8f8f',
  },
  inactive: {
    backgroundColor: '#b1b1b1',
    color: '#8f8f8f',
  },
});
