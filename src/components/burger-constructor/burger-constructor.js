import React from "react";
import PropTypes from "prop-types";
import { ConstructorElement, DragIcon, CurrencyIcon, Button } from "@ya.praktikum/react-developer-burger-ui-components";
import { dataPropTypes } from "../../utils/data";
import styles from "./burger-constructor.module.css";

function BurgerConstructor(props) {
  const [state, setState] = React.useState({
    bun: "60666c42cc7b410027a1a9b1",
  });

  return (
    <section className="pt-25 pb-13">
      <ul className={styles.constructor}>
        {props.data
          .filter((el) => el._id === state.bun)
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
          .filter((el) => el._id === state.bun)
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
        <Button type="primary" size="medium">
          Оформить заказ
        </Button>
      </div>
    </section>
  );
}

BurgerConstructor.propTypes = {
  data: PropTypes.arrayOf(dataPropTypes.isRequired).isRequired,
};

export default BurgerConstructor;
