import React from 'react';
import PropTypes from 'prop-types';

import { Container, Item } from './styles';

const Dropdown = ({ itens, handleFinded, active }) => {
  const keyPress = (event) => (item) => {
    if (event === undefined || event.key === ' ' || event.key === 'Enter') { handleFinded(item); }
  };
  const renderItems = () => (itens ? itens.map((item, i) => (
    <>
      <Item
        key={item}
        role="button"
        tabIndex={0}
        onKeyPress={(e) => keyPress(e)(item)}
        onClick={() => handleFinded(item)}
      >
        {item}
      </Item>
      {i < itens.length - 1 && (<hr />)}
    </>
  )) : null);
  return (
    <Container active={active}>
      {renderItems()}
    </Container>
  );
};

Dropdown.propTypes = {
  active: PropTypes.bool.isRequired,
  itens: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  handleFinded: PropTypes.func.isRequired,
};
export default Dropdown;
