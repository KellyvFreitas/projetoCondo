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
} from './styles';
import TabBarLocations from '../../components/TabBarLocations';
import {generallocations} from '../../Services/Locations';

export default () => {
  const {navigate} = useNavigation();
  const [location, setLocation] = useState();

  const menus = [
    {
      id: 1,
      title: 'Suporte',
      icon: <Icon name="face-agent" size={33} color={Colors.ButtonSecondary} />,
      screen: 'Home',
    },
    {
      id: 2,
      title: 'Convites',
      icon: (
        <Icon name="email-outline" size={33} color={Colors.ButtonSecondary} />
      ),
      screen: 'SignUp',
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
      screen: 'TermsConditions',
    },
    {
      id: 4,
      title: 'Perfil',
      icon: (
        <Icon name="account-outline" size={33} color={Colors.ButtonSecondary} />
      ),
      screen: 'Home',
    },
  ];

  const handleGetLocations = async () => {
    const response = await generallocations.locations;
    console.log('\n\nRESPONSE-LOCATION', JSON.stringify(response));
    setLocation(response);
  };

  useFocusEffect(
    useCallback(() => {
      handleGetLocations();
    }, []),
  );

  return (
    <Container>
      <ViewLogo>
        <Logo width="250" height="90" />

        <InviteAndCallPanel>
          <ButtonPanel title="Ligar" onPress={() => navigate('')} />
          <ButtonPanel title="Convidar" onPress={() => navigate('')} />
        </InviteAndCallPanel>
      </ViewLogo>

      <TaskList
        data={location}
        keyExtractor={(item, index) => index}
        renderItem={({item, index}) => (
          <TabBarLocations
            index={index}
            image={item?.image}
            title={item?.title}
            cnpj={item?.cnpj}
            code={item?.code}
            type={item?.type}
            number={item?.number}
            block={item?.block}
            onPress={null}
          />
        )}
      />

      <IconView>
        <Icon name="phone" size={85} />

        <Icon name="message-processing-outline" size={85} />
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
