import React, { useState } from 'react';
import Proptypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import { Search } from '../icons';
import { connect } from '../../store/index';
import Placeholders from '../placeholders/index';

import { CHANGE_KEYWORD } from '../../constants/types';

import {
  Container, Input, Submit,
} from './styles';

const SearchComponent = ({
  dispatch, store,
}) => {
  const [active, setActive] = useState(!store.keyword.length);
  const history = useHistory();

  const handleClick = () => {
    history.push('/person', {
      keyword: store.keyword,
    });
  };
  const handleSearch = (e) => {
    dispatch({
      type: CHANGE_KEYWORD,
      payload: e.target.value,
    });
  };
  const handleFocus = (focus) => {
    if (store.keyword.length === 0) {
      setActive(!focus);
    }
  };
  return (
    <Container onSubmit={handleClick}>
      <Placeholders active={active} />
      <Input
        onFocus={() => handleFocus(true)}
        onBlur={() => handleFocus(false)}
        defaultValue={store.keyword}
        type="text"
        required
        onChange={handleSearch}
      />
      <Submit type="submit" id="button">
        <Search />
      </Submit>
    </Container>
  );
};

SearchComponent.propTypes = {
  dispatch: Proptypes.func.isRequired,
  store: Proptypes.shape({
    keyword: Proptypes.string.isRequired,
  }).isRequired,
};

export default connect(SearchComponent);
