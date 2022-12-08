import {useNavigation} from '@react-navigation/native';
import React from 'react';
//-----------------------Components---------------------------------
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Logo from '../../assets/svg/Logo-noback.svg';
import {Colors} from '../../config/Colors';
//-----------------------Services---------------------------------
//-----------------------Styles------------------------------------
import TabBar from '../../components/TabBar';
import {
  ButtonPanel,
  Container,
  InviteAndCallPanel,
  TextTerms,
  TextTitle,
  ViewLogo,
  ViewTabBar,
  ViewTermsAndConditions,
  QuestionsView,
  ButtonText,
} from './styles';

export default () => {
  const {navigate} = useNavigation();

  const menus = [
    {
      id: 1,
      title: 'Inicio',
      icon: (
        <Icon name="home-outline" size={33} color={Colors.ButtonSecondary} />
      ),
      screen: 'SignIn',
    },
    {
      id: 2,
      title: 'Contrate',
      icon: (
        <Icon name="cart-outline" size={33} color={Colors.ButtonSecondary} />
      ),
      screen: 'SignUp',
    },
    {
      id: 3,
      title: 'Termos e Condições',
      icon: (
        <Icon
          name="book-open-variant"
          size={33}
          color={Colors.ButtonSecondary}
        />
      ),
      screen: 'TermsConditions',
    },
  ];

  return (
    <Container>
      <ViewLogo>
        <Logo width="250" height="90" />

        <InviteAndCallPanel>
          <ButtonPanel onPress={() => navigate('SignInMorador')}>
            <ButtonText>VOLTAR</ButtonText>
          </ButtonPanel>
        </InviteAndCallPanel>
      </ViewLogo>

      <ViewTermsAndConditions>
        <TextTitle>Duvidas Frequentes</TextTitle>
        <QuestionsView>
          <Icon name="arrow-right-drop-circle" size={25} />
          <TextTerms>Como posso resetar a minha senha?</TextTerms>
        </QuestionsView>
        <QuestionsView>
          <Icon name="arrow-right-drop-circle" size={25} />
          <TextTerms>Como reativar o meu X1SP?</TextTerms>
        </QuestionsView>
        <QuestionsView>
          <Icon name="arrow-right-drop-circle" size={25} />
          <TextTerms>
            Porque não consigo falar com a portaria do meu segundo condomínio?
          </TextTerms>
        </QuestionsView>
        <QuestionsView>
          <Icon name="arrow-right-drop-circle" size={25} />
          <TextTerms>
            Criando uma lista de convidados para eventos em minha residência
          </TextTerms>
        </QuestionsView>
      </ViewTermsAndConditions>

      <ViewTabBar>
        {menus.map((item, index) => (
          <TabBar
            onPress={() => navigate(item.screen)}
            icon={item?.icon}
            title={item?.title}
          />
        ))}
      </ViewTabBar>
    </Container>
  );
};
