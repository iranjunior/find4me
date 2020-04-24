import React from 'react';
import PropTypes from 'prop-types';

import Button from '../button';

export const ButtonIconTypes = {
  ICON: 'icon',
  FILL: 'fill',
  OUTLINE: 'outline',
  LARGE: 'large',
  MEDIUM: 'medium',
  SMALL: 'small',
};

function ButtonIcon({
  children, size, handleClick, disabled, type,
}) {
  return (
    <Button
      type={type}
      handleClick={handleClick}
      disabled={disabled}
      size={size}
    >
      {children}
    </Button>
  );
}

ButtonIcon.propTypes = {
  children: PropTypes.element.isRequired,
  disabled: PropTypes.bool,
  handleClick: PropTypes.func,
  size: PropTypes.string,
  type: PropTypes.string,
};

ButtonIcon.defaultProps = {
  type: ButtonIconTypes.ICON,
  size: ButtonIconTypes.MEDIUM,
  disabled: false,
  handleClick: () => {},
};
export default ButtonIcon;
