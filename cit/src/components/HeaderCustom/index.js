import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { Colors } from '../../config/Colors';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {
  Container,
  IconArea,
  HeaderTitle,
  HeaderViewTitle,
} from './styles';

const HeaderCustom = ({
  bgColor,
  IconSvg,
  title,
}) => {
  const { goBack } = useNavigation();
  return (
    <Container color={bgColor}>
      <HeaderViewTitle>
        <HeaderTitle>
          {title}
        </HeaderTitle>
      </HeaderViewTitle>
      {IconSvg && (
        <IconArea onPress={() => goBack()}>
          <Icon name="chevron-left" size={45} color={Colors.secondary} />
        </IconArea>
      )}

    </Container>
  );
};

export default HeaderCustom;
