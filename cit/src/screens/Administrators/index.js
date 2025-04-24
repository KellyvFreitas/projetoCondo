import {useFocusEffect, useNavigation} from '@react-navigation/native';
import React, {useCallback, useState} from 'react';
import {Image, ScrollView, StyleSheet, TouchableOpacity} from 'react-native';
//-----------------------Components---------------------------------
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import InputIcon from '../../components/InputIcon';
import TabBar from '../../components/TabBar';
import {Colors} from '../../config/Colors';
//-----------------------Services---------------------------------
import {generallocations} from '../../Services/Locations';
//-----------------------Styles------------------------------------
import Lupa from '../../assets/svg/lupa.svg';
import Logo from '../../assets/images/Condominio.png';
import {
  ButtonPasswordView,
  Container,
  InputArea,
  InputPassword,
  InvitationOptions,
  NamePersonText,
  NameTitleText,
  PasswordButtonOpacity,
  TextNamePersonView,
  TextTitle,
  TextTitleInvite,
  ViewDateTable,
  ViewGeneral,
  ViewGeral,
  ViewIcon,
  ViewIconPen,
  ViewLogo,
  ViewTabBar,
  ViewTitleTable,
  ViewTrashCan,
  ButtonPort,
  TextButton,
  PasswordButtonOpacity1,
} from './styles';

//import for the animation of Collapse and Expand
import * as Animatable from 'react-native-animatable';

//import for the Accordion view
import Accordion from 'react-native-collapsible/Accordion';
import ButtonCustom from '../../components/ButtonCustom';
import LogoImage from "../../assets/images/CondominioLogoEscuro.png";

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
      screen: 'InviteListAdmim',
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
      screen: 'InviteListAdmin',
    },
    {
      id: 4,
      title: 'Gravações',
      icon: <Icon name="microphone" size={33} color={Colors.ButtonSecondary} />,
      screen: 'Recordings',
    },
  ];

  const CONTENT = [
    {
      office: 'ADMINISTRADOR',
      name: 'Vilma Nágila',
      img: 'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
    },
    {
      office: 'AUX. ADMINISTRATIVO',
      name: 'Bruno Sampaio',
      img: 'https://images.unsplash.com/photo-1583195763986-0231686dcd43?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1176&q=80',
    },
    {
      office: 'AUX. ADMINISTRATIVO',
      name: 'Joao Carlos',
      img: 'https://images.unsplash.com/photo-1627234705411-6ab607ab2748?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
    },
  ];

  const [activeSections, setActiveSections] = useState([]);
  const [collapsed, setCollapsed] = useState(true);
  const [multipleSelect, setMultipleSelect] = useState(false);

  const toggleExpanded = () => {
    //Toggling the state of single Collapsible
    setCollapsed(!collapsed);
  };

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
              <NameTitleText>{section.office}</NameTitleText>
              <NamePersonText>{section.name}</NamePersonText>
            </TextNamePersonView>
          </ViewTitleTable>
          <ViewDateTable>
            <ViewIconPen>
              <Icon name="pencil" size={23} color="white" />
            </ViewIconPen>
            <ViewTrashCan>
              <Icon name="trash-can-outline" size={23} color="white" />
            </ViewTrashCan>
          </ViewDateTable>
        </ViewGeneral>
      </Animatable.View>
    );
  };

  const [hidePass, setHidePass] = useState(true);
  const renderContent = (section, _, isActive) => {
    //Accordion Content view
    return (
      <Animatable.View
        duration={400}
        style={[styles.content, isActive ? styles.active : styles.inactive]}
        transition={['backgroundColor', 'color']}>
        <Animatable.Text animation={isActive ? 'bounceIn' : undefined}>
          <ButtonPasswordView>
            <PasswordButtonOpacity>
              <Icon
                name="eye-outline"
                size={23}
                color="gray"
                style={{marginTop: 10, marginRight: 10}}
              />
              <InputPassword
                typeInput="password"
                placeholder="Nova Senha"
                secureTextEntry={hidePass}
              />
            </PasswordButtonOpacity>
            <PasswordButtonOpacity1>
              <InputPassword
                typeInput="password"
                placeholder="Confirmar nova senha"
                secureTextEntry
              />
            </PasswordButtonOpacity1>

            <ButtonPort>
              <TextButton>OK</TextButton>
            </ButtonPort>
          </ButtonPasswordView>
        </Animatable.Text>
      </Animatable.View>
    );
  };

  return (
    <Container>
      <ViewLogo>
        <Image source={LogoImage} style={{ width: 250, height: 90, resizeMode: 'contain' }} />
      </ViewLogo>
      <InputArea>
        <TextTitle>PESQUISAR ADMINISTRADORES</TextTitle>
        <InvitationOptions>
          <InputIcon
            IconSvg={Lupa}
            placeholder="Pesquisar por nome ou sobrenome"
            // value={emailField}
            // onChangeText={t => setEmailField(t)}
          />
        </InvitationOptions>

        <ViewGeral>
          <TextTitleInvite>ADMINISTRADORES</TextTitleInvite>

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
});
