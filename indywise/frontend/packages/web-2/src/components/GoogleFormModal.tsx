import * as React from 'react';
import Modal, { IModalProps } from './Modal';

interface GoogleFormModalProps extends IModalProps {
  src: string;
  title: string;
}

const GoogleFormModal: React.FC<GoogleFormModalProps> = ({
  modalState,
  closeModal,
  src,
  title
}) => {
  return (
    <>
      <Modal modalState={modalState} closeModal={closeModal}>
        <iframe
          src={src}
          width="100%"
          height="100%"
          frameBorder="0"
          marginHeight={0}
          marginWidth={0}
          title={title}
        />
      </Modal>
    </>
  );
};

export default GoogleFormModal;
