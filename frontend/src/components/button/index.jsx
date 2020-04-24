import React from 'react';
import PropTypes from 'prop-types';

import { Container, Button } from './styles';

export const ButtonTypes = {
  FILL: 'fill',
  ICON: 'icon',
  FILLHOME: 'fillhome',
  OUTLINE: 'outline',
  LARGE: 'large',
  MEDIUM: 'medium',
  SMALL: 'small',
};

function ButtonComponent({
  type, size, message, disable, handleClick, children,
}) {
  return (
    <Container
      size={size}
    >
      <Button
        type="submit"
        tabIndex={0}
        aria-label={message}
        disabled={disable}
        onClick={handleClick}
        typeButton={type}
      >
        {message || children}
      </Button>
    </Container>
  );
}

ButtonComponent.propTypes = {
  children: PropTypes.element,
  type: PropTypes.string,
  message: PropTypes.string,
  disable: PropTypes.bool,
  handleClick: PropTypes.func,
  size: PropTypes.string,
};

ButtonComponent.defaultProps = {
  type: ButtonTypes.FILL,
  size: ButtonTypes.MEDIUM,
  message: '',
  disable: false,
  handleClick: () => {},
  children: null,
};
export default ButtonComponent;
