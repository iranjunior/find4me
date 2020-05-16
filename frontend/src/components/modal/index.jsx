import React, { memo } from 'react';
import PropTypes from 'prop-types';
import Modal from 'react-modal';

import Login from './login';
import User from './user';

import styles from './styles';

export const TypesModal = {
  LOGIN: 'LOGIN',
  USER: 'USER',
};

const ModalComponent = ({
  isOpen, closeModal, content, data,
}) => {
  const renderContent = () => {
    const render = {
      LOGIN: Login,
      USER: User,
    };
    return React.createElement(render[content], { closeModal, data }) || null;
  };
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={closeModal}
      style={styles}
      contentLabel={content}
    >
      {renderContent()}
    </Modal>
  );
};

ModalComponent.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  closeModal: PropTypes.func.isRequired,
  content: PropTypes.string,
  data: PropTypes.any,
};

ModalComponent.defaultProps = {
  content: TypesModal.LOGIN,
  data: {},
};

export default memo(ModalComponent);
