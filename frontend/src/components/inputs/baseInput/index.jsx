import React, { useState, useCallback } from 'react';
import PropTypes from 'prop-types';

import { Container, Input, Label } from './styles';

const BaseInput = ({
  label, type, value, setValue, defaultValue, required,
  setInvalid, minLength, maxLength, isInvalid,
}) => {
  const [explain, setExplain] = useState(false);
  const [contrain, setContrain] = useState(false);

  const handleFocus = useCallback((focus) => {
    if (focus) {
      if (value.length === 0) {
        setExplain((prev) => prev || true);
        setContrain((prev) => prev && false);
      } else {
        setExplain((prev) => prev || true);
        setContrain((prev) => prev && false);
      }
    } else if (value.length === 0) {
      setContrain((prev) => prev || true);
      setExplain((prev) => prev && false);
    } else {
      setContrain((prev) => prev && false);
      setExplain((prev) => prev || true);
    }
  });

  return (
    <Container>
      <Label
        explain={explain}
        contrain={contrain}
      >
        {label}
      </Label>
      <Input
        tabIndex={0}
        aria-label={label}
        explain={explain}
        contrain={contrain}
        onFocus={() => handleFocus(true)}
        onBlur={() => handleFocus(false)}
        defaultValue={defaultValue}
        onChange={(e) => setValue(e.target.value)}
        type={type}
        required={required}
        onInvalid={() => setInvalid()}
        minLength={minLength}
        maxLength={maxLength}
        isInvalid={isInvalid}
      />
    </Container>
  );
};

BaseInput.propTypes = {
  label: PropTypes.string,
  required: PropTypes.bool,
  isInvalid: PropTypes.bool,
  type: PropTypes.string,
  defaultValue: PropTypes.string,
  value: PropTypes.string,
  setValue: PropTypes.func.isRequired,
  setInvalid: PropTypes.func,
  minLength: PropTypes.number,
  maxLength: PropTypes.number,
};
BaseInput.defaultProps = {
  label: 'Email',
  required: false,
  isInvalid: false,
  type: 'email',
  value: '',
  defaultValue: '',
  minLength: 0,
  maxLength: 250,
  setInvalid: () => {},
};

export default BaseInput;
