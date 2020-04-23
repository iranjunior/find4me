import React from 'react';
import Proptypes from 'prop-types';

import { Search } from '../icons';
import { connect } from '../../store/index';
import Placeholders from '../placeholders/index';

import {
  Container, Input, Submit, Form,
} from './styles';

const SearchComponent = ({
  handleClick, handleFocus, handleSearch, active, keyword,
}) => (
  <Container>
    <Placeholders active={active} />
    <Form onSubmit={handleClick}>
      <Input
        onFocus={() => handleFocus(true)}
        onBlur={() => handleFocus(false)}
        defaultValue={keyword}
        type="text"
        required
        onChange={(e) => handleSearch(e.target.value)}
      />
      <Submit type="submit" id="button">
        <Search />
      </Submit>
    </Form>
  </Container>
);

SearchComponent.propTypes = {
  handleClick: Proptypes.func.isRequired,
  handleFocus: Proptypes.func.isRequired,
  handleSearch: Proptypes.func.isRequired,
  keyword: Proptypes.string.isRequired,
  active: Proptypes.bool.isRequired,
};

export default connect(SearchComponent);
