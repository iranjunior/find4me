import React from 'react';
import PropTypes from 'prop-types';

import Link from './styles';

function LinkComponent({ content, link }) {
  return (<Link tabIndex={0} aria-label={content} href={link}>{content}</Link>);
}

LinkComponent.propTypes = {
  link: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};

export default LinkComponent;
