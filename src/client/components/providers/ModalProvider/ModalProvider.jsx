import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';

import Modal from '../../organisms/Modal/Modal';
import PortalProvider from '../PortalProvider/PortalProvider';
import { setModalDialog } from '../../../redux/modalDialog/modalDialog.actions';
import useOutsideClick from '../../../hooks/useOutsideClick/useOutsideClick';

import './ModalProvider.scss';

const ModalProvider = (props) => {
  const { children, customModal, showCustomModal } = props;
  const ref = useRef(null);
  const dispatch = useDispatch();
  const { type, message, mainFn } = useSelector((state) => state.modalDialog.modal);

  const closeDialog = () => {
    dispatch(setModalDialog({ modal: { type: '', message: '', mainFn: () => null } }));
  };

  const onClick = () => {
    mainFn();
    closeDialog();
  };

  return (
    <>
      {children}
      {type
        && (
          <PortalProvider>
            {() => {
              useOutsideClick(ref, closeDialog);
              return (
                <dialog className='modal-dialog' open={Boolean(type)} ref={ref}>
                  {(customModal && showCustomModal) ? customModal : (
                    <Modal
                      type={type}
                      message={message}
                      mainFn={onClick}
                      onClose={closeDialog}
                    />
                  )}
                </dialog>
              );
            }}
          </PortalProvider>
        )}
    </>
  );
};

ModalProvider.propTypes = {
  /** Children to render inside the provider */
  children: PropTypes.node.isRequired,
  /** Custom modal to render */
  customModal: PropTypes.node,
  /** Tells if the custom modal should be used in case it was defined */
  showCustomModal: PropTypes.bool,
};

ModalProvider.defaultProps = {
  customModal: null,
  showCustomModal: false,
};

export default ModalProvider;
