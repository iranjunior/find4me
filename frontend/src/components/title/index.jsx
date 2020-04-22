import React from 'react';
import Proptypes from 'prop-types';

import { Title } from './styles';

export default function TitleComponent({ content }) {
  return (
    <Title>
      {content}
    </Title>
  );
}
TitleComponent.propTypes = {
  content: Proptypes.string.isRequired,
};
