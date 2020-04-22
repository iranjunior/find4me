import React from 'react';

import Title from '../../components/title';
import Search from '../../components/search';
import { Logo } from '../../components/icons';

import texts from '../../constants/texts';

import { Container, Main, Header } from './styles';

export default function Home() {
  return (
    <Container>
      <Header>
        <Logo />
      </Header>
      <Main>
        <Title content={texts.TITTLE} />
        <Search />
      </Main>
    </Container>
  );
}
