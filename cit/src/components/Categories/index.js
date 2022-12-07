import React from 'react';

import {
  Container,
  ItemTitle,
  TextView,
  CategoriesButton,
} from './styles';
const Categories = ({ categories, onPress }) => {

  return (
    <Container>
      <TextView>
        <CategoriesButton onPress={onPress}>
          <ItemTitle>{categories}</ItemTitle>
        </CategoriesButton>
      </TextView>
    </Container>
  );
}
export default Categories