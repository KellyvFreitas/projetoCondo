import React from 'react';
import {
  ButtonContainer,
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
import {Colors} from '../../config/Colors';
const TabBarLocations = ({
  image,
  title,
  cnpj,
  code,
  type,
  number,
  block,
  selected,
  onPress,
  bgColorStatus,
}) => {
  return (
    <LocationsView
      onPress={onPress}
      bgColorStatus={
        selected === false ? Colors.primary : Colors.backgroundInput
      }>
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
  );
};
export default TabBarLocations;
