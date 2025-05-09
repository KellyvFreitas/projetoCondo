import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';

import SignIn from '../screens/SignIn';
import SignUp from '../screens/SignUp';

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
import MessageChat from '../screens/MessageChat';
import Administrators from '../screens/Administrators';
import ProfileAdmin from '../screens/ProfileAdmin';
import ReceivingCall from '../screens/ReceivingCall';
import Recordings from '../screens/Recordings';
import ResidentListAdmin from '../screens/ResidentListAdmin';
import InviteListAdmim from '../screens/InviteListAdmim';

const Stack = createStackNavigator();

export default () => (
  <Stack.Navigator
    initialRouteName="SignIn"
    screenOptions={{
      headerShown: false,
    }}>
    <Stack.Screen name="SignIn" component={SignIn} />
    <Stack.Screen name="ForgetPassword" component={ForgetPassword} />
    <Stack.Screen name="SignUp" component={SignUp} />
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
    <Stack.Screen name="MessageChat" component={MessageChat} />
    <Stack.Screen name="ProfileResident" component={ProfileResident} />
    <Stack.Screen name="Administrators" component={Administrators} />
    <Stack.Screen name="ProfileAdmin" component={ProfileAdmin} />
    <Stack.Screen name="ReceivingCall" component={ReceivingCall} />
    <Stack.Screen name="Recordings" component={Recordings} />
    <Stack.Screen name="ResidentListAdmin" component={ResidentListAdmin} />
    <Stack.Screen name="InviteListAdmim" component={InviteListAdmim} />
  </Stack.Navigator>
);
