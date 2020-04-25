import React from 'react';
import Proptypes from 'prop-types';

import BaseInput from '../baseInput';

const PasswordInput = ({
  value, setValue, defaultValue,
}) => (
  <BaseInput
    value={value}
    setValue={setValue}
    defaultValue={defaultValue || value}
    type="password"
    label="Senha"
    minLength={8}
    required
  />
);

PasswordInput.propTypes = {
  value: Proptypes.string,
  setValue: Proptypes.func,
  defaultValue: Proptypes.string,
};

PasswordInput.defaultProps = {
  value: '',
  isInvalid: false,
  setValue: (e) => console.log(e),
  defaultValue: '',
};

export default PasswordInput;
