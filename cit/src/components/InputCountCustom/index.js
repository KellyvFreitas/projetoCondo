import React from 'react';
import { InputArea, Input } from './styles';
import { Colors } from '../../config/Colors';
import { useColorScheme } from 'react-native';

export default ({
  IconSvg,
  placeholder,
  keyboardType,
  placeholderTextColor,
  value,
  onChangeText,
  password,
  editable,
  ...props
}) => {
  return (
    <InputArea>
      <Input
        keyboardType={keyboardType}
        placeholder={placeholder}
        placeholderTextColor={placeholderTextColor}
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={password}
        editable={editable}
      />
      {IconSvg && (
        <IconSvg
          width="24"
          height="24"
          fill={Colors.primary}
          onPress={props.onPress}
        />
      )}
    </InputArea>
  );
};
