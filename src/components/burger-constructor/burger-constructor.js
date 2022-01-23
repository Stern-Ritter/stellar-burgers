import React from "react";
import PropTypes from "prop-types";
import { ConstructorElement, DragIcon, CurrencyIcon, Button } from "@ya.praktikum/react-developer-burger-ui-components";
import Modal from "../modal/modal";
import OrderDetails from "../order-details/order-details";
import { dataPropTypes } from "../../utils/api";
import styles from "./burger-constructor.module.css";

function BurgerConstructor(props) {
  const [bun, setBun] = React.useState("60d3b41abdacab0026a733c6");
  const [order, setOrder] = React.useState({ id: '034536' });
  const [visible, setVisible] = React.useState(false);

  const openHandler = () => {
    setVisible(true);
  };

  const closeHandler = () => {
    setVisible(false);
  };

  return (
    <section className="pt-25 pb-13">
      <ul className={styles.constructor}>
        {props.data
          .filter((el) => el._id === bun)
          .map((ingredient) => {
            return (
              <li className={styles.bun + " pl-4 pr-4"} key={ingredient._id}>
                <ConstructorElement
                  type="top"
                  isLocked={true}
                  text={ingredient.name + " (верх)"}
                  price={ingredient.price}
                  thumbnail={ingredient.image}
                />
              </li>
            );
          })}
        <li className={styles.ingredients}>
          <ul className={styles.list}>
            {props.data
              .filter((el) => el.type === "main" || el.type === "sauce")
              .map((ingredient) => {
                return (
                  <li className={styles.ingredient + " pl-2 pr-2"} key={ingredient._id}>
                    <DragIcon type="primary" />
                    <ConstructorElement text={ingredient.name} price={ingredient.price} thumbnail={ingredient.image} />
                  </li>
                );
              })}
          </ul>
        </li>
        {props.data
          .filter((el) => el._id === bun)
          .map((ingredient) => {
            return (
              <li className={styles.bun + " pl-4 pr-4"} key={ingredient._id}>
                <ConstructorElement
                  type="bottom"
                  isLocked={true}
                  text={ingredient.name + " (низ)"}
                  price={ingredient.price}
                  thumbnail={ingredient.image}
                />
              </li>
            );
          })}
      </ul>
      <div className={styles.purchase + " pt-10"}>
        <div className={styles.total + " mr-10"}>
          <p className="text text_type_digits-medium mr-2">610</p>
          <CurrencyIcon type="primary" />
        </div>
        <Button type="primary" size="medium" onClick={openHandler}>
          Оформить заказ
        </Button>
      </div>
      {
        visible && <Modal closeHandler={closeHandler}>
          <OrderDetails order={order}></OrderDetails>
        </Modal>
      }
    </section>
  );
}

BurgerConstructor.propTypes = {
  data: PropTypes.arrayOf(dataPropTypes.isRequired).isRequired,
};

export default BurgerConstructor;
