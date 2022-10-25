import React from 'react';
import { InputArea, Input, ViewIcon } from './styles';
import { Colors } from '../../config/Colors';
import { useColorScheme } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default ({
  IconSvg,
  placeholder,
  placeholderTextColor,
  value,
  onChangeText,
  password,
  nameIcon,
  onPress,
  editable,
  ...props
}) => {
  return (
    <InputArea>
      <Input
        editable={editable}
        placeholder={placeholder}
        placeholderTextColor={placeholderTextColor}
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={password}
      />
      {IconSvg && (
        <ViewIcon>
          <IconSvg
            width="24"
            height="24"
            fill={Colors.tertiary}
            onPress={onPress}
          />
        </ViewIcon>
      )}
    </InputArea>
  );
};
