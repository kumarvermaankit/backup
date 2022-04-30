import * as React from 'react';
import styled from 'styled-components';
import { Icon } from '@indywise/uikit';
import { useClickOutside } from '../hooks/useClickOutside';
import { ModalState } from '../contexts/BookingModalContext';

export interface IModalProps {
  modalState: ModalState;
  closeModal: () => void;
}

const Modal: React.FC<IModalProps> = ({ modalState, closeModal, children }) => {
  const modalRef = React.useRef(null);
  const isOpen = modalState === ModalState.OPEN;

  useClickOutside(modalRef, closeModal);

  const keyPress = React.useCallback(
    (e) => {
      if (e.key === 'Escape' && isOpen) {
        closeModal();
      }
    },
    [isOpen, closeModal]
  );

  React.useEffect(() => {
    if (isOpen) {
      document.addEventListener('keydown', keyPress);
    }

    return () => document.removeEventListener('keydown', keyPress);
  }, [isOpen, keyPress]);

  React.useEffect(() => {
    if (isOpen) {
      // When modal is opened, we disable the scroll on the parent element(body)
      document.body.style.overflow = 'hidden';
    } else {
      // When modal is closed, we enable the scroll on the parent element(body)
      document.body.style.overflow = 'auto';
    }
  }, [isOpen]);

  return (
    <>
      {isOpen && (
        <Background ref={modalRef}>
          <ModalWrapper>
            <ModalContent>{children}</ModalContent>
            <CloseModalButton aria-label="Close modal" onClick={closeModal}>
              <Icon icon="close" size="18px" />
            </CloseModalButton>
          </ModalWrapper>
        </Background>
      )}
    </>
  );
};

export default Modal;

const Background = styled.div`
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.85);
  position: fixed;
  top: 0px;
  left: 0px;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1001; // Header z-index is 1000
`;

const ModalWrapper = styled.div`
  width: 90%;
  height: 90%;
  box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
  background: #fff;
  color: #000;
  position: relative;
  z-index: 1010;

  //! CHANGED Modal CSS WIdth for mentor form
  @media (max-width: 1150px) {
    width: 100%;
    height: 100%;
  }

  @media (max-width: 660px) {
    width: 100%;
    height: 100%;
  }
`;

const ModalContent = styled.div`
  width: 100%;
  height: 100%;
`;

const CloseModalButton = styled.div`
  cursor: pointer;
  position: absolute;
  padding: 8px;
  top: 16px;
  right: 32px;
  width: 32px;
  height: 32px;
  padding: 0.5em;
  z-index: 10;
  background: #ffffff;
  box-shadow: 0px 8px 16px rgba(12, 53, 89, 0.24);
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 475px) {
    width: 28px;
    height: 28px;
  }
`;
