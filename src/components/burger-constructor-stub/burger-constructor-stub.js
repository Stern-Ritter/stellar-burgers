import PropTypes from "prop-types";
import styles from "./burger-constructor-stub.module.css";

function BurgerConstructorStub({ isHover, dropTarget }) {
  const containerClass = `${styles.constructor} ${
    isHover ? styles.onHover : ""
  }`;

  return (
    <div className={containerClass} ref={dropTarget}>
      <p className={styles.text + " text text_type_main-default mb-2"}>
        Пренесите в эту область выбранные ингредиенты.
      </p>
    </div>
  );
}

BurgerConstructorStub.propTypes = {
  isHover: PropTypes.bool.isRequired,
  dropTarget: PropTypes.func.isRequired,
};

export default BurgerConstructorStub;
