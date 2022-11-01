import React from 'react';
import styled from 'styled-components/native';

const InputArea = styled.View`
  width: 100%;
  height: 49px;
  border-radius: 5px;
  background-color: #fff;
  flex-direction: row;
  padding-left: 15px;
  align-items: center;
`;
const Input = styled.TextInput`
  flex: 1;
  font-size: 14px;
  color: #ababab;
  margin-left: 10px;
  font-style: italic;
`;

export default ({IconSvg, placeholder, value, onChangeText, password}) => {
  return (
    <InputArea>
      <IconSvg width="24" height="24" fill="#ABABAB" />
      <Input
        placeholder={placeholder}
        placeholderTextColor="#ABABAB"
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={password}
      />
    </InputArea>
  );
};
