import React from "react";
import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./order.module.css";

function Order(options) {
  const { number, date, title, ingredients, amount } = options;

  const limitExceeding = ingredients.length - 6;
  const limitedIngredients = ingredients.slice(0, 6);

  return (
    <div className={styles.order + " p-6"}>
      <div className={styles.row + " mb-6"}>
        <p className="text text_type_digits-default">{`#${number}`}</p>
        <p className="text text_type_main-default text_color_inactive">
          {date}
        </p>
      </div>
      <h3 className="text text_type_main-medium mb-6">{title}</h3>
      <div className={styles.row}>
        <ul className={styles.ingredients}>
          {limitedIngredients.map((ingredient, idx) => (
            <li
              className={styles.item}
              style={{
                zIndex: ingredients.length - idx,
              }}
            >
              <div className={styles["ingredient-holder"]}>
                <img
                  src={ingredient}
                  alt={ingredient}
                  className={styles.ingredient}
                  style={{
                    opacity: idx === 5 && limitExceeding > 0 ? 0.6 : 1,
                  }}
                />
              </div>
              {idx === 5 && limitExceeding > 0 && (
                <span
                  className={styles.counter + " text text_type_main-default"}
                >{`+${limitExceeding}`}</span>
              )}
            </li>
          ))}
        </ul>
        <div className={styles.row}>
          <p className="text text_type_digits-default mr-2">{amount}</p>
          <CurrencyIcon type="primary" />
        </div>
      </div>
    </div>
  );
}

export default Order;
