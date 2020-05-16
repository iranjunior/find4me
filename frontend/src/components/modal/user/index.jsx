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
  closeModal, data,
}) => (
  <Container>
    <Header>
      <ButtonBack
        onClick={closeModal}
      >
        <Close color="black" />
      </ButtonBack>
      <Title>
        {data.name}
      </Title>
    </Header>
    <Main />
  </Container>
);

LoginModal.propTypes = {
  closeModal: PropTypes.func.isRequired,
};

export default LoginModal;
