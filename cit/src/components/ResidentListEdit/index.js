import {
  ViewGeneral,
  Image,
  ViewTrashCan,
  ViewTitleTable,
  NameTitleText,
  NamePersonText,
  TextNamePersonView,
  ViewDateTable,
} from './styles';
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default ({phone, name, img, index}) => {
  return (
    <ViewGeneral i={index}>
      <ViewTitleTable>
        <Image source={img}></Image>
        <TextNamePersonView>
          <NamePersonText i={index}>{name}</NamePersonText>
          <NameTitleText i={index}>{phone}</NameTitleText>
        </TextNamePersonView>
      </ViewTitleTable>
      <ViewDateTable>
        <ViewTrashCan i={index}>
          <Icon name="pencil-outline" size={22} color="white" />
        </ViewTrashCan>
        <ViewTrashCan i={index}>
          <Icon name="trash-can-outline" size={22} color="white" />
        </ViewTrashCan>
      </ViewDateTable>
    </ViewGeneral>
  );
};
