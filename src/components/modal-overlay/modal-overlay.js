import React from "react";
import styles from "./modal-overlay.module.css";

function ModalOverlay(props) {
  const overlay = React.useRef(null);

  const closeModalOnClick = (evt) => {
    if(evt.target === overlay.current) { props.closeHandler() }
  }

  return (
    <div
      className={styles.overlay}
      ref={overlay}
      onClick={ closeModalOnClick }
    >
      {props.children}
    </div>
  );
}

export default ModalOverlay;