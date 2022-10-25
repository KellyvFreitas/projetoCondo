import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useNavigation } from '@react-navigation/native';

import { Colors } from '../../config/Colors';

import {
  Container,
  MenuButton,
  MenuButtonText,
} from './styles';


const TabBar = ({ onPress, icon, title }) => {

  const { navigate } = useNavigation()

  return (

    <>
      <MenuButton onPress={onPress} >

        {icon}
        <MenuButtonText>{title}</MenuButtonText>
      </MenuButton>
    </>
  );
}
export default TabBar