import React from "react";
import PropTypes from "prop-types";
import styles from "./modal-overlay.module.css";

function ModalOverlay(props) {
  const overlay = React.useRef(null);

  const closeModalOnClick = (evt) => {
    if (evt.target === overlay.current) {
      props.closeHandler();
    }
  };

  return (
    <div className={styles.overlay} ref={overlay} onClick={closeModalOnClick}>
      {props.children}
    </div>
  );
}

ModalOverlay.propTypes = {
  closeHandler: PropTypes.func.isRequired
}

export default ModalOverlay;
