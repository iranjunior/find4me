import React from 'react';
import { MdSearch } from 'react-icons/md';

import Container from './styles';

const decorator = (Component) => (
  <Container>
    <Component />
  </Container>
);

export const Search = () => decorator(MdSearch);
