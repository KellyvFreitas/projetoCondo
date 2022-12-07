import React from 'react';

import { Container, Title } from './styles';

export default function EmptyCustom({ title }) {
  return (
    <Container>
      <Title>{title}</Title>
    </Container>
  );
}
