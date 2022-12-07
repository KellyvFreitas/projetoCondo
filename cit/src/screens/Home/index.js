import React from 'react';
import { Container, ViewBanner, ButtonBanner, ImageBanner, ViewTitle, TextTitle, TextTitleEnd, Divider, ViewMenu, GuiasArea, ViewContact, ButtonContact } from './styles';
import { useNavigation } from '@react-navigation/native';
//-----------------------SVG-----------------------------------------

//-----------------------Components----------------------------------;
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Colors } from '../../config/Colors';
import CardsGuia from '../../components/CardGuias';

export default () => {
  const { navigate } = useNavigation();

  const guias = [
    {
      id: 1,
      icon: 'book-open-page-variant',
      title: 'Carta',
      namescreen: 'MenuScreen',
    },

    {
      id: 2,
      icon: 'table-chair',
      title: 'Reserva',
      namescreen: 'ReservationScreen',
    },

    {
      id: 3,
      icon: 'ticket-percent-outline',
      title: 'Cupons',
      namescreen: 'DocumentsScreen',
    },

    {
      id: 4, icon: 'motorbike',
      title: 'Entrega e Takeaway',
      namescreen: 'ChatStack'
    },

    {
      id: 5,
      icon: 'silverware-fork-knife',
      title: 'promoções',
      namescreen: 'PromotionsScreen',
    },

    {
      id: 6,
      icon: 'room-service',
      title: ' ',
      namescreen: 'SuggestionScreen',
    },
  ];

  const _renderItem = ({ item }) => (
    <CardsGuia
      data={item}
      onPress={dataItem => handleGo(dataItem.namescreen)}
    />
  );
  const handleGo = screenName => {
    navigate(screenName);
  };

  return (
    <Container>
      <ViewTitle>
        <TextTitle> Promoções </TextTitle>
        <ButtonBanner>
          <TextTitleEnd> Ver mais </TextTitleEnd>
        </ButtonBanner>
      </ViewTitle>
      <ViewBanner>
        <ButtonBanner onPress={() => navigate('PromotionsScreen')}>
          <ImageBanner
            source={require('../../assets/images/BannerHome.png')}
            resizeMode='stretch'
          />
        </ButtonBanner>
      </ViewBanner>
      <Divider />
      <ViewTitle>
        <TextTitle> Home </TextTitle>
      </ViewTitle>
      <ViewMenu>
        <GuiasArea
          data={guias}
          renderItem={_renderItem}
          numColumns={3}
          keyExtractor={item => item.id}
        />
      </ViewMenu>
      <ViewTitle>
        <TextTitle> Contato </TextTitle>
      </ViewTitle>
      <ViewContact>
        <ButtonContact>
          <Icon
            name='whatsapp'
            size={40}
            color={Colors.tertiary}
          />
        </ButtonContact>
        <ButtonContact>
          <Icon
            name='instagram'
            size={40}
            color={Colors.tertiary}
          />
        </ButtonContact>
      </ViewContact>
    </Container>
  );
};
