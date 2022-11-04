import {useFocusEffect, useNavigation} from '@react-navigation/native';
import {
  View,
  SafeAreaView,
  StyleSheet,
  Text,
  Platform,
  UIManager,
  TouchableOpacity,
  Switch,
  ScrollView,
  Image,
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
  TextTitle,
  InvitationOptions,
  TextTitleInvite,
  ViewTitleTable,
  NameTitleText,
  NamePersonText,
  ViewDateTable,
  ViewGeneral,
  NameDateText,
  NameHourText,
  ViewIcon,
  TextNamePersonView,
  ViewGeral,
  ViewGeralRead,
} from './styles';

import Lupa from '../../assets/svg/lupa.svg';

import {
  Collapse,
  CollapseHeader,
  CollapseBody,
  AccordionList,
} from 'accordion-collapse-react-native';

//import for the animation of Collapse and Expand
import * as Animatable from 'react-native-animatable';

//import for the collapsible/Expandable view
import Collapsible from 'react-native-collapsible';

//import for the Accordion view
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
      title: 'Convites',
      icon: (
        <Icon name="email-outline" size={33} color={Colors.ButtonSecondary} />
      ),
      screen: 'InviteListAdmin',
    },
    {
      id: 3,
      title: 'Gravações',
      icon: <Icon name="microphone" size={33} color={Colors.ButtonSecondary} />,
      screen: 'Recordings',
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
      state: 'NotRead',
      content:
        'Por favor, quando meus convidados chegarem, ensinar o caminho até aqui.\n O pessoal do buffet ficou de vir mais cedo ...',
      img: 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
    },
    {
      type: 'CASA 132',
      name: 'Murilo Neto',
      date: '01/09/2022',
      hour: '14:52',
      state: 'NotRead',
      content:
        'Por favor, quando meus convidados chegarem, ensinar o caminho até aqui.\n O pessoal do buffet ficou de vir mais cedo ...',
      img: 'https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1476&q=80',
    },
  ];

  const CONTENTREAD = [
    {
      type: 'CASA 101',
      name: 'Wagner Perez',
      date: '28/08/2022',
      hour: '10:25',
      state: 'read',
      content:
        'Por favor, quando meus convidados chegarem, ensinar o caminho até aqui.\n O pessoal do buffet ficou de vir mais cedo ...',
      img: 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
    },
  ];

  const [activeSections, setActiveSections] = useState([]);
  const [activeSectionsRead, setActiveSectionsRead] = useState([]);
  // Collapsed condition for the single collapsible
  const [collapsed, setCollapsed] = useState(true);
  // MultipleSelect is for the Multiple Expand allowed
  // True: Expand multiple at a time
  // False: One can be expand at a time
  const [multipleSelect, setMultipleSelect] = useState(false);

  const toggleExpanded = () => {
    //Toggling the state of single Collapsible
    setCollapsed(!collapsed);
  };

  const setSections = sections => {
    //setting up a active section state
    setActiveSections(sections.includes(undefined) ? [] : sections);
  };

  const setSectionsRead = sections => {
    //setting up a active section state
    setActiveSectionsRead(sections.includes(undefined) ? [] : sections);
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
          style={{textAlign: 'justify', color: 'white', marginTop: -10}}>
          {section.content}
        </Animatable.Text>
      </Animatable.View>
    );
  };

  return (
    <Container>
      <ViewLogo>
        <Logo width="250" height="90" />
      </ViewLogo>
      <ScrollView style={{marginBottom: 10}}>
        <InputArea>
          <ViewGeral>
            <TextTitleInvite>NOVAS MENSAGENS</TextTitleInvite>

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

          <TextTitle>PESQUISAR MENSAGENS</TextTitle>
          <InvitationOptions>
            <InputIcon
              IconSvg={Lupa}
              placeholder="Pesquisar por data, casa ou morador"
              // value={emailField}
              // onChangeText={t => setEmailField(t)}
            />
          </InvitationOptions>

          <ViewGeralRead>
            <TextTitleInvite>MENSAGENS</TextTitleInvite>

            <Accordion
              activeSections={activeSectionsRead}
              //for any default active section
              sections={CONTENTREAD}
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
              onChange={setSectionsRead}
              //setting the state of active sections
            />
          </ViewGeralRead>
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
    textAlign: 'justify',
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
