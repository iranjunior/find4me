import React, { memo } from 'react';
import Proptypes from 'prop-types';

import { Title } from './styles';

const TitleComponent = ({ content }) => (
  <Title>
    {content}
  </Title>
);
TitleComponent.propTypes = {
  content: Proptypes.string.isRequired,
};

export default memo(TitleComponent);
