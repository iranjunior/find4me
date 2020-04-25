import React, { memo } from 'react';
import Proptypes from 'prop-types';

import Information from './styles';

export const InformationTypes = {
  ERROR: 'error',
  NORMAL: 'normal',
};

const InformationComponent = ({ active, type, content }) => (
  <Information type={type} active={active}>
    {content}
  </Information>
);
InformationComponent.propTypes = {
  content: Proptypes.string.isRequired,
  type: Proptypes.string,
  active: Proptypes.bool,
};
InformationComponent.defaultProps = {
  active: true,
  type: InformationTypes.NORMAL,
};
export default memo(InformationComponent);
