import React, { useState, useEffect } from 'react';

import {
  Container,
  Item,
  ViewImage,
  ItemImage,
  TextTitle,
  TextDescription,
  TextView,
  ViewFooter,
  TextFooter,
  TextPrice,
  Divider,
} from './styles';

export default function Dish({
  onPress,
  title,
  description,
  persons,
  price,
  ...props
}) {
  return (
    <Container>
      <Item onPress={onPress}>
        <ViewImage>
          <ItemImage
            source={{
              uri: props.image
            }}
            resizeMode={'contain'}
          />
          <TextView>
            <TextTitle> {title}</TextTitle>
            <TextDescription>
              {description}
            </TextDescription>
            <ViewFooter>
              <TextFooter>Serve {persons} Pessoas</TextFooter>
              <TextPrice>E$ {price}</TextPrice>
            </ViewFooter>
          </TextView>

        </ViewImage>
      </Item>
      <Divider />
    </Container>
  );
}
