import React from 'react';
import {InputArea, Input} from './styles';
import {Colors} from '../../config/Colors';
import {useColorScheme} from 'react-native';

export default ({
  IconSvg,
  placeholder,
  value,
  onChangeText,
  password,
  editable,
  keyboardType,
  placeholderTextColor,
  ...props
}) => {
  return (
    <InputArea>
      <Input
        placeholder={placeholder}
        placeholderTextColor={placeholderTextColor}
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={password}
        editable={editable}
        keyboardType={keyboardType}
      />
    </InputArea>
  );
};
