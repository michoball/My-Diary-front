import React from "react";
import reactDom from "react-dom";

import { BackdropStyle, ModalWrapperStyle } from "./Modal.styles";

const Backdrop = ({ toggleModal }) => {
  return <BackdropStyle onClick={toggleModal}></BackdropStyle>;
};

const ModalWrapper = ({ children }) => {
  return <ModalWrapperStyle>{children}</ModalWrapperStyle>;
};

const Modal = ({ toggleModal, children }) => {
  return (
    <>
      {reactDom.createPortal(
        <Backdrop toggleModal={toggleModal} />,
        document.getElementById("backdorp")
      )}
      {reactDom.createPortal(
        <ModalWrapper>{children}</ModalWrapper>,
        document.getElementById("overlay")
      )}
    </>
  );
};

export default Modal;
