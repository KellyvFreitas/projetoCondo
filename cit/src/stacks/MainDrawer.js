import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { useNavigation } from '@react-navigation/native';

import Home from '../screens/Home';
import Profile from '../screens/Profile';
import DrawerCustom from '../components/DrawerCustom';
import { Colors } from '../config/Colors';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Logo from '../assets/svg/Logo.svg';

const Drawer = createDrawerNavigator();

export default () => {
  const navigation = useNavigation();
  const { goBack } = useNavigation();

  return (
    <Drawer.Navigator
      drawerContent={props => <DrawerCustom {...props} />}

      screenOptions={{
        headerShown: true,
        headerTitleAlign: 'center',
        headerTitleStyle: { color: `${Colors.tertiary}`, margin: 10, },
        headerTintColor: `${Colors.tertiary}`,
        headerStyle: {
          backgroundColor: `${Colors.primary}`,
          shadowOpacity: 0,
          elevation: 0,
        },
        headerTitle: props => <Logo width="50" height="50" />,
      }}
    >
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="Profile" component={Profile} />

    </Drawer.Navigator>
  );
};
