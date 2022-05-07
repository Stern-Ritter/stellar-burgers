import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import { CloseIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import ModalOverlay from "../modal-overlay/modal-overlay";
import styles from "./modal.module.css";
import PropTypes from "prop-types";

const modal = document.getElementById("react-modals");

function Modal(props) {

  const closeModalOnEsc = (evt) => {
    if (evt.key === "Escape") {
      props.closeHandler();
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", closeModalOnEsc);
    return () => {
      document.removeEventListener("keydown", closeModalOnEsc);
    };
  }, []);

  return ReactDOM.createPortal(
    <>
    <div className={styles.modal}>
      {props.title && (
        <h2 className={styles.title + " text text_type_main-large pl-10 pr-10 pt-10 pb-3"}>
          {props.title}
        </h2>
      )}
      <button
        className={styles.close}
        type="button"
        title="Закрыть"
        onClick={props.closeHandler}
      >
        <CloseIcon type="primary" />
      </button>
      {props.children}
    </div>
    <ModalOverlay closeHandler={props.closeHandler}></ModalOverlay>
    </>,
    modal
  );
}

Modal.propTypes = {
  title: PropTypes.string,
  closeHandler: PropTypes.func.isRequired,
};

export default Modal;
