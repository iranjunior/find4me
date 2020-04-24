import React from 'react';
import PropTypes from 'prop-types';
import { Close } from '../../icons';
import Button from '../../button/index';
import EmailInput from '../../inputs/email';
import PasswordInput from '../../inputs/passwords';

import texts from '../../../constants/texts';

import {
  Container, Header, ButtonBack, Title, Main, Form, WrapperLinks,
} from './styles';
import Link from '../../links';

const LoginModal = ({
  closeModal,
}) => (
  <Container>
    <Header>
      <ButtonBack
        onClick={closeModal}
      >
        <Close color="black" />
      </ButtonBack>
      <Title>
        {texts.LOGIN_TITLE}
      </Title>
    </Header>
    <Main>
      <Form>
        <EmailInput />
        <PasswordInput />
        <Button message="Logar" />
        <WrapperLinks>
          <Link link="#" content={texts.LOGIN_FORGET} />
          <Link link="#" content={texts.LOGIN_REGISTER} />
        </WrapperLinks>
      </Form>
    </Main>
  </Container>
);

LoginModal.propTypes = {
  closeModal: PropTypes.func.isRequired,
};

export default LoginModal;
