import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import UserContextProvider from './src/contexts/UserContext';
import MainStack from './src/stacks/MainStack';

export default () => {
  return (
    <NavigationContainer>
      <UserContextProvider>
        <MainStack />
      </UserContextProvider>
    </NavigationContainer>
  );
};