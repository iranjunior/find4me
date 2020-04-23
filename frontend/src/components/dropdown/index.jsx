import React from 'react';
import PropTypes from 'prop-types';

import { Container, Item } from './styles';

const Dropdown = ({ itens }) => {
  const renderItems = () => (itens ? itens.map((item, i) => (
    <>
      <Item key={item}>{item}</Item>
      {i < itens.length - 1 && (<hr />)}
    </>
  )) : null);
  return (
    <Container active={!!itens.length}>
      {renderItems()}
    </Container>
  );
};

Dropdown.propTypes = {
  itens: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
};
export default Dropdown;
