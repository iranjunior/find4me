import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Close } from '../../icons';

import Button from '../../button';
import Information, { InformationTypes } from '../../informations';
import EmailInput from '../../inputs/email';
import PasswordInput from '../../inputs/passwords';

import {
  LOGIN_TITLE, LOGIN_FORGET, LOGIN_REGISTER, FEEDBACK_INVALID_FIELDS, FEEDBACK_INVALID_USER,
} from '../../../constants/texts';

import { handleLogin, handleCheckFieldsLogin } from '../../../services/handles';

import {
  Container, Header, ButtonBack, Title, Main, Form, Feedbacks, WrapperLinks,
} from './styles';
import Link from '../../links';

const LoginModal = ({
  closeModal,
}) => {
  const [invalid, setInvalid] = useState({ email: false });
  const [errorLogin, setErrorLogin] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <Container>
      <Header>
        <ButtonBack
          onClick={closeModal}
        >
          <Close color="black" />
        </ButtonBack>
        <Title>
          {LOGIN_TITLE}
        </Title>
      </Header>
      <Main>
        <Form onSubmitCapture={handleCheckFieldsLogin(setInvalid)} onSubmit={handleLogin(setErrorLogin, closeModal)}>
          <EmailInput isInvalid={invalid.email} value={email} setValue={setEmail} />
          <PasswordInput value={password} setValue={setPassword} />
          <Feedbacks>
            <Information active={invalid.email} content={FEEDBACK_INVALID_FIELDS} type={InformationTypes.ERROR} />
            <Information active={errorLogin} content={FEEDBACK_INVALID_USER} type={InformationTypes.ERROR} />
          </Feedbacks>
          <Button disabled={email.length === 0 || password.length === 0} message="Logar" />
          <WrapperLinks>
            <Link link="#" content={LOGIN_FORGET} />
            <Link link="#" content={LOGIN_REGISTER} />
          </WrapperLinks>
        </Form>
      </Main>
    </Container>
  );
};

LoginModal.propTypes = {
  closeModal: PropTypes.func.isRequired,
};

export default LoginModal;
