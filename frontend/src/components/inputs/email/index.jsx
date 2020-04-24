import React, { useState } from 'react';

import BaseInput from '../baseInput';

const EmailInput = () => {
  const [value, setValue] = useState('');
  return (
    <BaseInput
      value={value}
      setValue={setValue}
      type="email"
      label="Email"
    />
  );
};

export default EmailInput;
