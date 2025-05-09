import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';
import Preload from '../screens/Preload';
import SelectProfile from '../screens/SelectProfile';
import MainStackAdministrador from '../stacks/MainStackAdministrador';
import MainStackMorador from '../stacks/MainStackMorador';

const Stack = createStackNavigator();

export default () => (
  <Stack.Navigator
    initialRouteName="Preload"
    screenOptions={{
      headerShown: false,
    }}>
    <Stack.Screen name="Preload" component={Preload} />
    <Stack.Screen name="SelectProfile" component={SelectProfile} />
    <Stack.Screen
      name="MainStackAdministrador"
      component={MainStackAdministrador}
    />
    <Stack.Screen name="MainStackMorador" component={MainStackMorador} />
  </Stack.Navigator>
);
