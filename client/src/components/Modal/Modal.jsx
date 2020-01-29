// import "./Modal.scss";
import React from "react";
import ReactDOM from "react-dom";

// JS Rendering CSS
import {
  ModalContainer,
  ModalWindow,
  ModalHeader,
  ModalInfo,
  ModalClose
} from "./ModalStyles";

const Modal = ({ info }) => {
  const onModalInteraction = () => {
    document.querySelector("#modal").style.display = "none";
  };

  return ReactDOM.createPortal(
    <ModalContainer onClick={onModalInteraction}>
      <ModalWindow onClick={e => e.stopPropagation()}>
        <ModalHeader id="modal-head"></ModalHeader>
        <ModalInfo id="modal-info">{info}</ModalInfo>
        <ModalClose onClick={onModalInteraction}>&#10006;</ModalClose>
      </ModalWindow>
    </ModalContainer>,
    document.querySelector("#modal")
  );
};

export default Modal;
