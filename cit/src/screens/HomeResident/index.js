import {useFocusEffect, useNavigation} from '@react-navigation/native';
import React, {useCallback, useState} from 'react';
//-----------------------Components---------------------------------
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Logo from '../../assets/svg/Logo-noback.svg';

import {Colors} from '../../config/Colors';
//-----------------------Services---------------------------------
//-----------------------Styles------------------------------------
import TabBar from '../../components/TabBar';
import {
  Container,
  ViewLogo,
  ViewTabBar,
  InviteAndCallPanel,
  ButtonPanel,
  TaskList,
  IconView,
  IconCallText,
  IconMessageText,
  IconImageView,
  IconTextView,
  ButtonText,
  IconColorCallView,
  IconColorMessageView,
  TitleText,
  TaskCondominio,
} from './styles';
import TabBarLocations from '../../components/TabBarLocations';
import {generallocations} from '../../Services/Locations';

export default () => {
  const {navigate} = useNavigation();
  const [location, setLocation] = useState();
  const [selectedId, setSelectedId] = useState(false);
  const [selectedItem, setSelectedItem] = useState();
  const [phone, setPhone] = useState();

  const menus = [
    {
      id: 1,
      title: 'Suporte',
      icon: <Icon name="face-agent" size={33} color={Colors.ButtonSecondary} />,
      screen: 'FAQLogged',
    },
    {
      id: 2,
      title: 'Convites',
      icon: (
        <Icon name="email-outline" size={33} color={Colors.ButtonSecondary} />
      ),
      screen: 'InviteList',
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

  const handleGetLocations = async () => {
    const response = await generallocations.locations;
    // console.log('\n\nRESPONSE-LOCATION', JSON.stringify(response));
    setLocation(response);
  };

  const handleClickLocation = item => {
    if (item === item) {
      setSelectedId(true);
    }
  };

  useFocusEffect(
    useCallback(() => {
      handleGetLocations();
    }, []),
  );
  console.log('SELECIONE', selectedId);
  return (
    <Container>
      <ViewLogo>
        <Logo width="250" height="90" />

        <InviteAndCallPanel>
          <TitleText>SELECIONE O CONDOMINIO</TitleText>
        </InviteAndCallPanel>
      </ViewLogo>

      <TaskList
        data={location}
        keyExtractor={(item, index) => index}
        renderItem={({item, index}) => (
          <TabBarLocations
            onPress={() => {
              setSelectedItem(item);
            }}
            key={index}
            index={index}
            image={item?.image}
            title={item?.title}
            cnpj={item?.cnpj}
            code={item?.code}
            type={item?.type}
            number={item?.number}
            block={item?.block}
            selected={item === selectedItem ? false : true}
          />
        )}
      />
      <IconView>
        <IconImageView onPress={() => navigate('Calling')}>
          <IconColorCallView>
            <Icon name="phone" size={70} color="white" />
          </IconColorCallView>
          <IconCallText>LIGAR</IconCallText>
        </IconImageView>
        <IconTextView>
          <IconColorMessageView>
            <Icon name="message-processing-outline" size={70} color="white" />
          </IconColorMessageView>
          <IconMessageText>MENSAGEM</IconMessageText>
        </IconTextView>
      </IconView>

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
