import React from 'react';

import Title from '../../components/title';
import Search from '../../components/search';

import texts from '../../constants/texts';

import { Container, Main } from './styles';

export default function Home() {
  return (
    <Container>
      <Main>
        <Title content={texts.TITTLE} />
        <Search />
      </Main>
    </Container>
  );
}
