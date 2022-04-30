import * as React from 'react';
import { useLocation } from 'react-router-dom';

export enum ModalState {
  OPEN = 'OPEN',
  CLOSE = 'CLOSE'
}

export interface IBookingModal {
  modalState: ModalState;
  service: number | null;
  category: number | null;
  bookingLink?: string | null;
  openBookingModal: (
    _service?: number,
    _bookingLink?: string,
    _category?: number
  ) => void;
  closeBookingModal: () => void;
}

const BookingModalContext = React.createContext<IBookingModal>(
  {} as IBookingModal
);

export const BookingModalProvider: React.FC = ({ children }) => {
  const bookingModal = useProvideBookingModal();

  return (
    <BookingModalContext.Provider value={bookingModal}>
      {children}
    </BookingModalContext.Provider>
  );
};

export const useBookingModal = () => {
  return React.useContext(BookingModalContext);
};

export const isOpen = (state: ModalState): Boolean => state === ModalState.OPEN;

const useProvideBookingModal = (): IBookingModal => {
  const [modalState, setModalState] = React.useState<ModalState>(
    ModalState.CLOSE
  );
  const [service, setService] = React.useState<null | number>(null);
  const [category, setCategory] = React.useState<null | number>(null);
  const [bookingLink, setBookingLink] = React.useState<null | string>(null);

  const openBookingModal = (
    _service?: number,
    _bookingLink?: string,
    _category?: number
  ) => {
    if (modalState === ModalState.OPEN) return;
    _service ? setService(_service) : setService(null);
    _category ? setCategory(_category) : setCategory(null);
    _bookingLink ? setBookingLink(_bookingLink) : setBookingLink(null);
    setModalState(ModalState.OPEN);
  };

  const closeBookingModal = () => {
    setService(null);
    setCategory(null);
    setModalState(ModalState.CLOSE);
  };

  const location = useLocation().pathname;

  // We want to close the modal if the user goes to other route on the app
  React.useEffect(() => {
    setService(null);
    setModalState(ModalState.CLOSE);
  }, [location]);

  return {
    // STATE
    modalState,
    service,
    category,
    bookingLink,

    // ACTIONS
    openBookingModal,
    closeBookingModal
  };
};
