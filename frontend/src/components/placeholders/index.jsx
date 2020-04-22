import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import placeholders from './placeholders';

import { Container, WrapperTexts, Texts } from './styles';


const Placeholders = ({ active }) => {
  let myIndex = 0;

  const carousel = () => {
    let i;
    const x = document.querySelectorAll('.texts');
    if (x.length > 1) {
      for (i = 0; i < x.length; i += 1) {
        x[i].style.display = 'none';
      }
      myIndex += 1;
      if (myIndex > x.length) { myIndex = 1; }
      x[myIndex - 1].style.display = 'block';
      setTimeout(carousel, 2000);
    }
  };

  useEffect(() => {
    carousel();
  }, []);

  return (
    <Container active={active}>
      {'Pesquisar por: '}
      <WrapperTexts>
        {placeholders.map((placeholder) => <Texts className="texts" key={placeholder}>{placeholder}</Texts>)}
      </WrapperTexts>
    </Container>
  );
};

Placeholders.propTypes = {
  active: PropTypes.bool.isRequired,
};

export default Placeholders;
