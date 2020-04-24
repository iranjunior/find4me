import React, { useState } from 'react';

import BaseInput from '../baseInput';

const PasswordInput = () => {
  const [value, setValue] = useState('');
  return (
    <BaseInput
      value={value}
      setValue={setValue}
      type="password"
      label="Senha"
    />
  );
};

export default PasswordInput;
