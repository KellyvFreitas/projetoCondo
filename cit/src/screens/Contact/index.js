import {useFocusEffect, useNavigation} from '@react-navigation/native';
import React, {useCallback, useState} from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {generallocations} from '../../Services/Locations';
import SelectMultiple from '../../components/Select';
import DropDownPicker from 'react-native-dropdown-picker';
import {
  Container,
  ViewLogo,
  IconView,
  ViewText,
  Text,
  ButtonPort,
  TextButton,
  ViewCallPanel,
  TitleText,
  ViewTabBar,
  ViewSelect,
  TextPicker,
  ButtonPort1,
} from './styles';
import Logo from '../../assets/svg/Logo-noback.svg';
import {Colors} from '../../config/Colors';
import TabBar from '../../components/TabBar';
import {View, StyleSheet} from 'react-native';

export default ({route}) => {
  const {navigate} = useNavigation();
  const contact = route.params;
  const [selectedValue, setSelectedValue] = useState();
  const [showPicker, setShowPicker] = useState(false);
  const [open, setOpen] = useState(false);
  const [open2, setOpen2] = useState(false);

  const [value, setValue] = useState(null);
  const [value2, setValue2] = useState(null);

  const [items, setItems] = useState([
    {label: 'A', value: 'A'},
    {label: 'B', value: 'B'},
    {label: 'C', value: 'C'},
    {label: 'D', value: 'D'},
    {label: 'E', value: 'E'},
  ]);
  const [items2, setItems2] = useState([
    {label: '031/AUGUSTO P.', value: '031/AUGUSTO P.'},
  ]);

  const menu = [
    {
      id: 0,
      title: 'CONDOMÍNIO ALPES DO HIMALAIA',
    },
    {
      id: 1,
      title: 'CONDOMÍNIO MENDONZA',
    },
  ];

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
  const handleShowPicker = () => {};

  return (
    <Container>
      <ViewLogo>
        <Logo width="250" height="90" />
      </ViewLogo>
      <IconView onPress={() => navigate('HomeResident')}>
        <Icon name="chevron-left-box" size={36} color={Colors.primary} />
      </IconView>

      <ViewCallPanel>
        <TitleText>{contact.title}</TitleText>
      </ViewCallPanel>

      <ViewText>
        <Text>PARA QUEM VOCÊ QUER LIGAR?</Text>
      </ViewText>

      <ButtonPort onPress={() => navigate('ReceivingCall', contact)}>
        <Icon name="account" size={30} color="white" />
        <TextButton>PORTARIA</TextButton>
      </ButtonPort>

      <ButtonPort onPress={() => navigate('ReceivingCall', contact)}>
        <Icon name="account-tie" size={30} color="white" />
        <TextButton>ADMINISTRAÇÃO</TextButton>
      </ButtonPort>

      {!showPicker && (
        <ButtonPort
          onPress={() => {
            setShowPicker(true);
          }}>
          <Icon name="home-city" size={30} color="white" />
          <TextButton>OUTRAS RESIDÊNCIAS DO CONDOMÍNIO</TextButton>
        </ButtonPort>
      )}
      {showPicker && (
        <>
          <ButtonPort
            onPress={() => {
              setShowPicker(false);
            }}>
            <Icon name="home-city" size={30} color="white" />
            <TextButton>OUTRAS RESIDÊNCIAS DO CONDOMÍNIO</TextButton>
          </ButtonPort>

          <ViewSelect>
            <ButtonPort1
              onPress={() => navigate('ReceivingCall', contact)}
              style={{backgroundColor: '#3b688a', height: 30, width: 60}}>
              <TextButton>OK</TextButton>
            </ButtonPort1>
            <DropDownPicker
              placeholder="UNIDADE"
              open={open2}
              value={value2}
              items={items2}
              setOpen={setOpen2}
              setValue={setValue2}
              setItems={setItems2}
              style={{
                width: 150,
                margin: 5,
                backgroundColor: Colors.ButtonText,
                borderRadius: 8,
              }}
              containerStyle={{
                width: 160,
              }}
              textStyle={{
                fontSize: 12,
                color: Colors.textcolorBack,
                left: 15,
              }}
              labelStyle={{
                fontWeight: 'bold',
              }}
              placeholderStyle={{
                fontWeight: 'bold',
                left: 15,
              }}
            />

            <DropDownPicker
              max
              placeholder="BLOCO"
              open={open}
              value={value}
              items={items}
              setOpen={setOpen}
              setValue={setValue}
              setItems={setItems}
              style={{
                width: 93,
                height: 3,
                backgroundColor: Colors.ButtonText,
                borderRadius: 10,
              }}
              containerStyle={{
                width: 100,
              }}
              textStyle={{
                fontSize: 12,
                color: Colors.textcolorBack,
              }}
              labelStyle={{
                fontWeight: 'bold',
              }}
              placeholderStyle={{
                fontWeight: 'bold',
              }}
            />
          </ViewSelect>
        </>
      )}

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
  container: {
    flex: 1,
    paddingTop: 40,
    alignItems: 'center',
  },
});
