import React, { useState, useCallback } from 'react';
import PropTypes from 'prop-types';

import { Container, Input, Label } from './styles';

const BaseInput = ({
  label, type, value, setValue,
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
        explain={explain}
        contrain={contrain}
        onFocus={() => handleFocus(true)}
        onBlur={() => handleFocus(false)}
        defaultValue={value}
        onChange={(e) => setValue(e.target.value)}
        type={type}
      />
    </Container>
  );
};

BaseInput.propTypes = {
  label: PropTypes.string,
  type: PropTypes.string,
  value: PropTypes.string,
  setValue: PropTypes.func.isRequired,
};
BaseInput.defaultProps = {
  label: 'Email',
  type: 'email',
  value: '',
};

export default BaseInput;
