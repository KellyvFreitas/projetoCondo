import React from 'react';
import {useFocusEffect, useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Logo from '../../assets/images/Condominio.png';
import { Image } from 'react-native';
import InputCustom from '../../components/InputCustom';

import {
  Container,
  ViewLogo,
  IconView,
  IconVert,
  MessageOptions,
  Text,
  TextData,
  DateView,
  TextName,
  ViewDate,
  ViewText,
  MessageImage,
  ViewInput,
  IconReturn,
} from './styles';
import {View} from 'react-native';
import LogoImage from "../../assets/images/Condominio.png";

export default ({route, navigation}) => {
  const {navigate} = useNavigation();
  const chat = route.params;
  const loggedUser = {
    id: 1,
    image:
      'https://www.psicologosberrini.com.br/wp-content/uploads/10-dicas-de-saude-mental-para-mulheres-768x576.jpg',
  };
  return (
    <Container>
      <ViewLogo>
          <Image source={LogoImage} style={{ width: 250, height: 90, resizeMode: 'contain' }} />
      </ViewLogo>
      <IconView>
        <Icon
          onPress={() => navigate('InviteListAdmin')}
          name="chevron-left-box"
          size={35}
          color={'white'}
        />
        <IconVert>
          <Icon name="dots-vertical" size={30} color={'black'} />
        </IconVert>
      </IconView>

      <MessageOptions>
        <TextName>{chat.nome}</TextName>
        <TextData>{chat.casa}</TextData>
      </MessageOptions>
      <ViewDate>
        <DateView>12 ago 2022</DateView>
      </ViewDate>
      {chat.messagens.map(message => (
        <ViewText
          style={{
            marginBottom: 10,
            backgroundColor:
              message.user === loggedUser.id ? '#e7e7e7' : 'gray',
          }}>
          <MessageImage
            source={{
              uri:
                message.user === loggedUser.id ? loggedUser.image : chat.image,
            }}
          />
          <Text
            style={{
              color: message.user === loggedUser.id ? '##000' : '#fff',
            }}>
            {message.message}
          </Text>
          <Text
            style={{
              color: message.user === loggedUser.id ? '##000' : '#fff',
            }}>
            {message.message}
          </Text>
          <Text
            style={{
              color: message.user === loggedUser.id ? '##000' : '#fff',
            }}>
            {message.message}
          </Text>
        </ViewText>
      ))}

      <ViewInput>
        <InputCustom placeholder="Digite uma mensagem" />

        <IconReturn>
          <Icon name="chevron-right-box" size={30} color="gray" />
        </IconReturn>
      </ViewInput>
    </Container>
  );
};
