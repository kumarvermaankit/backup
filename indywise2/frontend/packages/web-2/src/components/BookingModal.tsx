import * as React from 'react';
import Modal from './Modal';
import styled from 'styled-components';
import { isOpen, useBookingModal } from '../contexts/BookingModalContext';

const BookingModal: React.FC = () => {
  const {
    service,
    category,
    bookingLink,
    modalState,
    closeBookingModal
  } = useBookingModal();
  const iframeRef = React.useRef<HTMLIFrameElement>(null);
  let baseUrl =
    'https://indywise.simplybook.it/v2/?widget-type=iframe&theme=dainty&datepicker=top_calendar&timeline=modern';

  let src = '';

  if (bookingLink && bookingLink.includes('indywise2')) {
    baseUrl =
      'https://indywise2.simplybook.it/v2/?widget-type=iframe&theme=dainty&datepicker=top_calendar&timeline=modern';
  }

  if (service) {
    if (service === 121) {
      src =
        'https://indywise.simplybook.it/v2/?widget-type=iframe&theme=dainty&datepicker=top_calendar&timeline=modern#book/service/121';
    } else if (service === 72) {
      src =
        'https://indywise.simplybook.it/v2/?widget-type=iframe&theme=dainty&datepicker=top_calendar&timeline=modern#book/service/72';
    } else if (service === 73) {
      src =
        'https://indywise.simplybook.it/v2/?widget-type=iframe&theme=dainty&datepicker=top_calendar&timeline=modern#book/service/73';
    } else {
      src = `${baseUrl}#book/category/${
        category ? category : 1
      }/service/${service}`;
    }
  } else {
    src = baseUrl;
  }

  document.cookie = 'sb_widget=1';
  const sendThemeReq = React.useCallback(() => {
    const theme_settings = {
      timeline_show_end_time: '1',
      timeline_hide_unavailable: '0',
      sb_base_color: '#0c3559',
      secondary_color: '#f2a922',
      sb_text_color: '#0c3559',
      display_item_mode: 'block',
      body_bg_color: '#ffffff',
      sb_background_image: '',
      sb_review_image: '',
      dark_font_color: '#042039',
      light_font_color: '#ffffff',
      sb_company_label_color: '#f2a922',
      sb_cancellation_color: '#dd5d00',
      hide_img_mode: '0'
    };
    const app_config = { allow_switch_to_ada: 0, predefined: [] };
    const postData = {
      update_config: true,
      update_theme_vars: true,
      theme_vars: theme_settings,
      config_vars: app_config
    };

    if (iframeRef.current?.contentWindow) {
      iframeRef.current.contentWindow.postMessage(postData, '*');
    }
  }, []);

  React.useEffect(() => {
    let count = 0;
    let intervalTimer: any;

    if (isOpen(modalState)) {
      const setTheme = () => {
        if (count > 2) return;
        // We call `sendThemeReq` which sends a req to SimplyBook's widget
        // backend with 2s manual delay because `sendThemeReq` don't work on
        // `onLoad` event of `IFrame`.
        //
        // THIS IS A HACK! IT SETS THE THEME AT THE EXPENSE OF RELOADING IT!
        if (count === 2) sendThemeReq();
        count++;
      };

      intervalTimer = setInterval(setTheme, 1000);
    } else if (!isOpen(modalState)) {
      // We clear the interval from memory when the modal is closed
      clearInterval(intervalTimer);
    }

    return () => clearInterval(intervalTimer);
  }, [modalState, sendThemeReq]);

  return (
    <>
      <Modal modalState={modalState} closeModal={closeBookingModal}>
        <IFrame
          src={src}
          ref={iframeRef}
          title="session booking"
          height="100%"
          width="100%"
        />
      </Modal>
    </>
  );
};

export default BookingModal;

const IFrame = styled.iframe`
  border: none;
`;
