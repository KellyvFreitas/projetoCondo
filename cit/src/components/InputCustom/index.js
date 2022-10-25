import React from 'react';
import { InputArea, Input } from './styles';
import { Colors } from '../../config/Colors';
import { useColorScheme } from 'react-native';

export default ({
  IconSvg,
  placeholder,
  value,
  onChangeText,
  password,
  ...props
}) => {
  return (
    <InputArea>
      <Input
        placeholder={placeholder}
        placeholderTextColor={Colors.black}
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={password}
      />
      {IconSvg && (
        <IconSvg
          width="24"
          height="24"
          fill={Colors.tertiary}
          onPress={props.onPress}
        />
      )}
    </InputArea>
  );
};
