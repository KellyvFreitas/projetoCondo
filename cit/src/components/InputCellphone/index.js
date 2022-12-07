import React from 'react';
import { InputArea, MaskedCell } from './styles';
import { Colors } from '../../config/Colors';

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

      <MaskedCell
        placeholder={placeholder}
        placeholderTextColor={Colors.tertiary}
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={password}
        type={'cel-phone'}
        options={{
          maskType: 'BRL',
          withDDD: true,
          dddMask: '(99) ',
        }}
      />
      {IconSvg && (
        <IconSvg
          width="24"
          height="24"
          fill={Colors.secondary}
          onPress={props.onPress}
        />
      )}
    </InputArea>
  );
};
