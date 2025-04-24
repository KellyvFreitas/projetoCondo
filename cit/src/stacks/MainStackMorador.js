import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';
import SelectProfile from '../screens/SelectProfile';
import SignInMorador from '../screens/SignInMorador';
import SignUp from '../screens/SignUp';

import TermsConditionsMorador from '../screens/TermsConditionsMorador';
import HomeResident from '../screens/HomeResident';
import FAQ from '../screens/FAQ';
import InviteList from '../screens/InviteList';
import ProfileResident from '../screens/ProfileResident';
import TermsConditionsLogged from '../screens/TermsConditionsLogged';
import FAQLogged from '../screens/FAQLogged';
import ForgetPassword from '../screens/ForgetPassword';
import Calling from '../screens/Calling';
import MessageChat from '../screens/MessageChat';
import ReceivingCall from '../screens/ReceivingCall';
import Recordings from '../screens/Recordings';
import FAQMorador from '../screens/FAQMorador';
import Contact from '../screens/Contact';
import InviteListMorador from '../screens/InviteListMorador';
import MessageChatMorador from '../screens/MessageChatMorador';

const Stack = createStackNavigator();

export default () => (
  <Stack.Navigator
    initialRouteName="SignInMorador"
    screenOptions={{
      headerShown: false,
    }}>
    <Stack.Screen name="SelectProfile" component={SelectProfile} />
    <Stack.Screen name="SignInMorador" component={SignInMorador} />
    <Stack.Screen name="ForgetPassword" component={ForgetPassword} />
    <Stack.Screen name="SignUp" component={SignUp} />

    <Stack.Screen name="Calling" component={Calling} />
    <Stack.Screen
      name="TermsConditionsMorador"
      component={TermsConditionsMorador}
    />
    <Stack.Screen
      name="TermsConditionsLogged"
      component={TermsConditionsLogged}
    />
    <Stack.Screen name="HomeResident" component={HomeResident} />
    <Stack.Screen name="FAQ" component={FAQ} />
    <Stack.Screen name="FAQLogged" component={FAQLogged} />
    <Stack.Screen name="InviteList" component={InviteList} />
    <Stack.Screen name="MessageChat" component={MessageChat} />
    <Stack.Screen name="ProfileResident" component={ProfileResident} />
    <Stack.Screen name="ReceivingCall" component={ReceivingCall} />
    <Stack.Screen name="Recordings" component={Recordings} />
    <Stack.Screen name="FAQMorador" component={FAQMorador} />
    <Stack.Screen name="Contact" component={Contact} />
    <Stack.Screen name="InviteListMorador" component={InviteListMorador} />
    <Stack.Screen name="MessageChatMorador" component={MessageChatMorador} />
  </Stack.Navigator>
);
