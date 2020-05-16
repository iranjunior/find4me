import React, { memo } from 'react';
import Proptypes from 'prop-types';

import Title from './styles';

const TitleComponent = ({ content, show }) => (
  <Title show={show}>
    {content}
  </Title>
);

TitleComponent.propTypes = {
  content: Proptypes.string.isRequired,
  show: Proptypes.bool,
};
TitleComponent.defaultProps = {
  show: true,
};

export default memo(TitleComponent);
