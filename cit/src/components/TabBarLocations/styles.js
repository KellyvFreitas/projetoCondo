import styled from 'styled-components/native';
import {Colors} from '../../config/Colors';

export const LocationsView = styled.View`
  flex: 1;
  flex-direction: row;
  margin-bottom: 12px;
  background-color: ${Colors.backgroundInput};
  min-height: 100px;
  align-items: center;
`;
export const ViewImage = styled.View`
  margin-left: 25px;
`;
export const ViewTitle = styled.View`
  flex-direction: row;
`;
export const LocationsInfo = styled.Text`
  font-size: 11px;
  margin: 2px;
`;
export const ViewLocationInfo = styled.View`
  margin: 2px;
  flex-direction: row;
`;
export const ViewLocationsAdress = styled.View`
  flex-direction: row;
`;
export const LocationsType = styled.Text`
  margin: 2px;
`;
export const TextLocationTitle = styled.Text`
  font-size: 17px;
  font-weight: bold;
`;
export const InfoCardView = styled.View`
  justify-content: center;
`;
export const ImageLocation = styled.Image`
  width: 90px;
  height: 90px;
  border-radius: 45px;
  border: 1px solid black;
  margin-right: 20px;
  border-color: black;
  justify-content: center;
  align-items: center;
`;
