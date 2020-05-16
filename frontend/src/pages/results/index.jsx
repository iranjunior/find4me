import React, { useState, useEffect } from 'react';
import { useHistory, useLocation } from 'react-router-dom';

import Title from '../../components/title';
import Modal, { TypesModal } from '../../components/modal';
import Search from '../../components/search';
import Card from '../../components/cards';

import { Logo } from '../../components/icons';

import {
  Container, Header, Main, WrapperSearch, Content,
} from './styles';
import { SEARCHING } from '../../constants/texts';
import { connect } from '../../store';
import {
  handleResults, handleClick, handleFocus, handleSearch, handleFinded, handleUserModal,
} from '../../services/handles';

function Result({ store, dispatch }) {
  const history = useHistory();
  const location = useLocation();
  const [user, setUser] = useState({});
  const [contentModal, setContentModal] = useState(TypesModal.LOGIN);
  const [active, setActive] = useState(!store.keyword.length);
  const [isOpen, setIsOpen] = useState(false);
  const [searching, setSearching] = useState(false);

  useEffect(() => {
    handleResults(setIsOpen, setSearching, dispatch, store.keyword);
  }, []);


  return (
    <Container animation={!!store.usersFinded.length} animationReverse={!!store.usersFinded.length}>
      <Modal isOpen={isOpen} content={contentModal} data={user} closeModal={() => setIsOpen(false)} />
      <Header>
        <Logo />
      </Header>
      <Main>
        <WrapperSearch>
          <Search
            handleClick={handleClick(history, location)}
            handleFocus={handleFocus(setActive, store.keyword)}
            handleSearch={handleSearch(dispatch)}
            active={active}
            keyword={store.keyword}
            suggestions={store.suggestionsKeywords}
            handleFinded={handleFinded(dispatch)}
          />
        </WrapperSearch>
        <Content>
          <Title show={searching} content={SEARCHING} />
          { store.usersFinded.map((user) => (
            <Card
              key={user.name}
              handleClick={handleUserModal(setIsOpen, setContentModal, setUser, TypesModal.USER, user)}
              data={user}

            />
          )) }
        </Content>
      </Main>
    </Container>
  );
}

export default connect(Result);
