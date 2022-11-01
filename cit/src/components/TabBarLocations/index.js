import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {useNavigation} from '@react-navigation/native';

import {Colors} from '../../config/Colors';

import {
  LocationsView,
  ViewImage,
  InfoCardView,
  LocationsInfo,
  ViewTitle,
  ImageLocation,
  TextLocationTitle,
  ViewLocationInfo,
  ViewLocationsAdress,
  LocationsType,
} from './styles';

const TabBarLocations = ({image, title, cnpj, code, type, number, block}) => {
  return (
    <>
      <LocationsView>
        <ViewImage>
          <ImageLocation source={{uri: image}} resizeMode={'contain'} />
        </ViewImage>

        <InfoCardView>
          <ViewTitle>
            <TextLocationTitle>{title}</TextLocationTitle>
          </ViewTitle>

          <ViewLocationInfo>
            <LocationsInfo>{cnpj}</LocationsInfo>
            <LocationsInfo>CODIGO: {code}</LocationsInfo>
          </ViewLocationInfo>

          <ViewLocationsAdress>
            <LocationsType>{type}</LocationsType>
            <LocationsType>{number}</LocationsType>
            <LocationsType>{block}</LocationsType>
          </ViewLocationsAdress>
        </InfoCardView>
      </LocationsView>
    </>
  );
};
export default TabBarLocations;
