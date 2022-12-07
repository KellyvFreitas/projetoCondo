import React from 'react';
import { InputArea, MaskedCPF } from './styles';
import { Colors } from '../../config/Colors';

export default ({
  IconSvg,
  placeholder,
  value,
  onChangeText,
  password,
  onPress,
}) => {
  return (
    <InputArea>
      {IconSvg && (
        <IconSvg width="24" height="24" fill={Colors.text} onPress={onPress} />
      )}

      <MaskedCPF
        placeholder={placeholder}
        placeholderTextColor={Colors.textDisabled}
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={password}
        type={'cpf'}
      />
    </InputArea>
  );
};
