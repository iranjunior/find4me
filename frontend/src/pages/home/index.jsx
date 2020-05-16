import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useHistory, useLocation } from 'react-router-dom';
import { connect } from '../../store';

import Title from '../../components/title';
import Search from '../../components/search';
import { Logo } from '../../components/icons';

import { TITTLE } from '../../constants/texts';

import {
  handleClick, handleSearch, handleFocus, handleFinded,
} from '../../services/handles';

import {
  Container, Main, Header, Content,
} from './styles';

const Home = ({
  dispatch, store,
}) => {
  const [active, setActive] = useState(!store.keyword.length);
  const history = useHistory();
  const location = useLocation();
  return (
    <Container>
      <Header>
        <Logo />
      </Header>
      <Main>
        <Content>
          <Title content={TITTLE} />
          <Search
            handleClick={handleClick(history, location)}
            handleFocus={handleFocus(setActive, store.keyword)}
            handleSearch={handleSearch(dispatch)}
            active={active}
            keyword={store.keyword}
            suggestions={store.suggestionsKeywords}
            handleFinded={handleFinded(dispatch)}
          />
        </Content>
      </Main>
    </Container>
  );
};
Home.propTypes = {
  dispatch: PropTypes.func.isRequired,
  store: PropTypes.shape({
    keyword: PropTypes.string,
    suggestionsKeywords: PropTypes.array,
  }).isRequired,
};

export default connect(Home);
