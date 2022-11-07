import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';
import Preload from '../screens/Preload';
import SignIn from '../screens/SignIn';
import SignUp from '../screens/SignUp';

import Home from '../screens/Home';
import TermsConditions from '../screens/TermsConditions';
import HomeResident from '../screens/HomeResident';
import FAQ from '../screens/FAQ';
import InviteList from '../screens/InviteList';
import ProfileResident from '../screens/ProfileResident';
import TermsConditionsLogged from '../screens/TermsConditionsLogged';
import FAQLogged from '../screens/FAQLogged';
import ForgetPassword from '../screens/ForgetPassword';
import Calling from '../screens/Calling';
import HomeAdmin from '../screens/HomeAdmin';
import InviteListAdmin from '../screens/InviteListAdmin';
import Recordings from '../screens/Recordings';
import Administrators from '../screens/Administrators';
import MessagesAdmin from '../screens/MessagesAdmin';
import ResidentListAdmin from '../screens/ResidentListAdmin';

const Stack = createStackNavigator();

export default () => (
  <Stack.Navigator
    initialRouteName="Preload"
    screenOptions={{
      headerShown: false,
    }}>
    <Stack.Screen name="Preload" component={Preload} />
    <Stack.Screen name="SignIn" component={SignIn} />
    <Stack.Screen name="ForgetPassword" component={ForgetPassword} />
    <Stack.Screen name="SignUp" component={SignUp} />
    <Stack.Screen name="Home" component={Home} />
    <Stack.Screen name="Calling" component={Calling} />
    <Stack.Screen name="TermsConditions" component={TermsConditions} />
    <Stack.Screen
      name="TermsConditionsLogged"
      component={TermsConditionsLogged}
    />
    <Stack.Screen name="HomeResident" component={HomeResident} />
    <Stack.Screen name="HomeAdmin" component={HomeAdmin} />
    <Stack.Screen name="FAQ" component={FAQ} />
    <Stack.Screen name="FAQLogged" component={FAQLogged} />
    <Stack.Screen name="InviteList" component={InviteList} />
    <Stack.Screen name="InviteListAdmin" component={InviteListAdmin} />
    <Stack.Screen name="Recordings" component={Recordings} />
    <Stack.Screen name="MessagesAdmin" component={MessagesAdmin} />
    <Stack.Screen name="ProfileResident" component={ProfileResident} />
    <Stack.Screen name="ResidentListAdmin" component={ResidentListAdmin} />
    <Stack.Screen name="Administrators" component={Administrators} />
  </Stack.Navigator>
);
