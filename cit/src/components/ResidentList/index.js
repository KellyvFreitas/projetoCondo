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

export default ({type, name, img, index}) => {
  return (
    <ViewGeneral i={index}>
      <ViewTitleTable>
        <Image source={img}></Image>
        <TextNamePersonView>
          <NameTitleText i={index}>{type}</NameTitleText>
          <NamePersonText i={index}>{name}</NamePersonText>
        </TextNamePersonView>
      </ViewTitleTable>
      <ViewDateTable>
        <ViewTrashCan i={index}>
          <Icon name="trash-can-outline" size={23} />
        </ViewTrashCan>
      </ViewDateTable>
    </ViewGeneral>
  );
};
