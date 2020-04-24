import React, { memo } from 'react';
import PropTypes from 'prop-types';
import Modal from 'react-modal';

import Login from './login';

import styles from './styles';

export const Types = {
  LOGIN: 'LOGIN',
};

const ModalComponent = ({
  isOpen, closeModal, content,
}) => {
  const renderContent = () => {
    const render = {
      LOGIN: Login,
    };
    return React.createElement(render[content], { closeModal }) || null;
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
};

ModalComponent.defaultProps = {
  content: Types.LOGIN,
};

export default memo(ModalComponent);
