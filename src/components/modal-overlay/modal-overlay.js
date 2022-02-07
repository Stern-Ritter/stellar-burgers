import React from "react";
import styles from "./modal-overlay.module.css";
import PropTypes from "prop-types";

function ModalOverlay({ closeHandler }) {
  const overlay = React.useRef(null);

  const closeModalOnClick = (evt) => {
    if (evt.target === overlay.current) {
      closeHandler();
    }
  };

  return (<div className={styles.overlay} ref={overlay} onClick={closeModalOnClick}></div>);
}

ModalOverlay.propTypes = {
  closeHandler: PropTypes.func.isRequired
}

export default ModalOverlay;
