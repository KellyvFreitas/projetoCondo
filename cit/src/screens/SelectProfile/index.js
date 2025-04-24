import React from 'react';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Colors } from '../../config/Colors';
import LogoImage from '../../assets/images/Condominio.png';
import { Image, View } from 'react-native';

import {
    Container,
    Logo,
    ViewLogo,
    ButtonAdmim,
    ButtonAdmin,
    TitleButton,
    ButtonMorador,
    ButtonMordor,
} from './styles';

export default () => {
    const { navigate } = useNavigation();

    return (
        <Container>
            <ViewLogo>
                <Image source={LogoImage} style={{ width: 250, height: 90, resizeMode: 'contain' }} />
            </ViewLogo>

            <ButtonMordor>
                <ButtonMorador>
                    <TitleButton onPress={() => navigate('MainStackMorador')}>
                        Morador
                    </TitleButton>
                </ButtonMorador>
            </ButtonMordor>

            <ButtonAdmim>
                <ButtonAdmin>
                    <TitleButton onPress={() => navigate('MainStackAdministrador')}>
                        Administrador
                    </TitleButton>
                </ButtonAdmin>
            </ButtonAdmim>
        </Container>
    );
};
