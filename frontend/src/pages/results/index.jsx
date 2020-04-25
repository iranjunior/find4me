import React, { useState, useEffect } from 'react';
import Title from '../../components/title';
import Modal from '../../components/modal';
import { Logo } from '../../components/icons';

import { Container, Header, Main } from './styles';
import { SEARCHING } from '../../constants/texts';
import { connect } from '../../store';
import { handlePersons, handleAuthentication } from '../../services/handles';

function Result({ store, dispatch }) {
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    const isAuthenticated = handleAuthentication();

    if (isAuthenticated) {
      const { err, data } = handlePersons(store.keyword);
      console.log(err, data);
    } else {
      setIsOpen(true);
    }
  }, []);


  return (
    <Container>
      <Modal isOpen={isOpen} closeModal={() => setIsOpen(false)} />
      <Header>
        <Logo />
      </Header>
      <Main>
        <Title content={SEARCHING} />
      </Main>
    </Container>
  );
}

export default connect(Result);
