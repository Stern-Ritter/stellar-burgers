import ReactDOM from "react-dom";
import { CloseIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import ModalOverlay from "../modal-overlay/modal-overlay";
import styles from "./modal.module.css";
import { useEffect } from "react";

function Modal(props) {
  const modal = document.getElementById("react-modals");

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
    <ModalOverlay closeHandler={props.closeHandler}>
      <div className={styles.modal}>
        <button
          className={styles["modal__close"]}
          type="button"
          title="Закрыть"
          onClick={props.closeHandler}
        >
          <CloseIcon type="primary" />
        </button>
        {props.children}
      </div>
      ,
    </ModalOverlay>,
    modal
  );
}

export default Modal;
