import React from 'react';
import {Colors} from '../../config/Colors';
import {Container, ButtonText, Loading} from './styles';

const ButtonCustomMorador = ({
  title,
  onPress,
  bgcolor,
  color,
  loading,
  primary,
}) => {
  return (
    <>
      {loading ? (
        <Container onPress={onPress} bgcolor={bgcolor}>
          {primary ? (
            <Loading color={Colors.white} size={25} />
          ) : (
            <Loading color={Colors.white} size={25} />
          )}
        </Container>
      ) : (
        <Container onPress={onPress} bgcolor={bgcolor}>
          <ButtonText color={color}>{title}</ButtonText>
        </Container>
      )}
    </>
  );
};

export default ButtonCustomMorador;
