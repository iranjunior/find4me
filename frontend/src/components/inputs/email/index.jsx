import React from 'react';
import Proptypes from 'prop-types';

import BaseInput from '../baseInput';

const EmailInput = ({
  setInvalid, value, setValue, defaultValue, isInvalid,
}) => (
  <BaseInput
    value={value}
    setValue={setValue}
    type="email"
    label="Email"
    defaultValue={defaultValue || value}
    setInvalid={setInvalid}
    isInvalid={isInvalid}
    required
  />
);
EmailInput.propTypes = {
  isInvalid: Proptypes.bool,
  value: Proptypes.string,
  setValue: Proptypes.func,
  defaultValue: Proptypes.string,
  setInvalid: Proptypes.string,
};

EmailInput.defaultProps = {
  value: '',
  isInvalid: false,
  setValue: (e) => console.log(e),
  defaultValue: '',
  setInvalid: () => {},
};
export default EmailInput;
