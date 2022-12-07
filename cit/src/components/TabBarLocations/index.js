import React from 'react';
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

const TabBarLocations = ({
  image,
  title,
  cnpj,
  code,
  type,
  number,
  block,
  selected,
}) => {
  return (
    <LocationsView style={{backgroundColor: selected ? 'red' : 'green'}}>
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
