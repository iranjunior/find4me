import React from 'react';
import PropTypes from 'prop-types';
import { Close } from '../../icons';

import texts from '../../../constants/texts';

import {
  Container, Header, Button, Title, Main,
} from './styles';

const LoginModal = ({
  closeModal,
}) => (
  <Container>
    <Header>
      <Button
        onClick={closeModal}
      >
        <Close color="black" />
      </Button>
      <Title>
        {texts.LOGIN_TITLE}
      </Title>
    </Header>
    <Main />
  </Container>
);

LoginModal.propTypes = {
  closeModal: PropTypes.func.isRequired,
};

export default LoginModal;
