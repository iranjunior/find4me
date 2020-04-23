import React, { createRef, useMemo } from 'react';
import Proptypes from 'prop-types';

import { Search } from '../icons';
import { connect } from '../../store/index';
import Placeholders from '../placeholders';
import Dropdown from '../dropdown';


import {
  Container, Input, Submit, Form,
} from './styles';

const SearchComponent = ({
  handleClick, handleFocus, handleSearch, active, keyword, suggestions, handleFinded,
}) => {
  const activeDropdown = useMemo(() => !!suggestions.length, [suggestions]);
  const inputRef = createRef();
  return (
    <Container>
      <Placeholders inputRef={inputRef} active={active} />
      <Form onSubmit={() => handleClick(keyword)}>
        <Input
          onFocus={() => handleFocus(true)}
          onBlur={() => handleFocus(false)}
          defaultValue={keyword}
          value={keyword}
          type="text"
          required
          ref={inputRef}
          onChange={(e) => handleSearch(e.target.value)}
        />
        <Submit type="submit" id="button">
          <Search />
        </Submit>
        <Dropdown
          handleFinded={handleFinded}
          itens={suggestions}
          active={activeDropdown}

        />
      </Form>
    </Container>
  );
};

SearchComponent.propTypes = {
  handleClick: Proptypes.func.isRequired,
  handleFinded: Proptypes.func.isRequired,
  handleFocus: Proptypes.func.isRequired,
  handleSearch: Proptypes.func.isRequired,
  suggestions: Proptypes.arrayOf(Proptypes.string.isRequired),
  keyword: Proptypes.string.isRequired,
  active: Proptypes.bool.isRequired,
};
SearchComponent.defaultProps = {
  suggestions: [],
};
export default connect(SearchComponent);
