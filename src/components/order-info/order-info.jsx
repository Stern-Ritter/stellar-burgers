import React from "react";
import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./order-info.module.css";

function OrderInfo() {
  const info = {
    number: "034533",
    name: "Black Hole Singularity острый бургер",
    status: "Выполнен",
    composition: [
      {
        name: "Флюоресцентная булка R2-D3",
        image: "https://code.s3.yandex.net/react/code/bun-01-mobile.png",
        count: 2,
        price: 20,
      },
      {
        name: "Филе Люминесцентного тетраодонтимформа",
        image: "https://code.s3.yandex.net/react/code/meat-03-mobile.png",
        count: 1,
        price: 300,
      },
      {
        name: "Соус традиционный галактический",
        image: "https://code.s3.yandex.net/react/code/sauce-03-mobile.png",
        count: 1,
        price: 30,
      },
      {
        name: "Плоды Фалленианского дерева",
        image: "https://code.s3.yandex.net/react/code/sp_1-mobile.png",
        count: 1,
        price: 80,
      },
      {
        name: "Флюоресцентная булка R2-D3",
        image: "https://code.s3.yandex.net/react/code/bun-01-mobile.png",
        count: 2,
        price: 20,
      },
      {
        name: "Филе Люминесцентного тетраодонтимформа",
        image: "https://code.s3.yandex.net/react/code/meat-03-mobile.png",
        count: 1,
        price: 300,
      },
      {
        name: "Соус традиционный галактический",
        image: "https://code.s3.yandex.net/react/code/sauce-03-mobile.png",
        count: 1,
        price: 30,
      },
      {
        name: "Плоды Фалленианского дерева",
        image: "https://code.s3.yandex.net/react/code/sp_1-mobile.png",
        count: 1,
        price: 80,
      },
    ],
    date: "Вчера, 13:50 i-GMT+3",
    total: 510,
  };

  const { number, name, status, composition, date, total } = info;

  return (
    <div>
      <p
        className={styles.number + " text text_type_digits-default mb-10"}
      >{`#${number}`}</p>
      <p className="text text_type_main-medium mb-3">{name}</p>
      <p
        className={
          " text text_type_main-default mb-15 " +
          (status === "Выполнен" ? styles.done : "")
        }
      >
        {status}
      </p>
      <p className="text text_type_main-medium">Состав:</p>
      <ul className={styles.list}>
        {composition.map((ingredient, idx) => (
          <li key={idx} className={styles.row + " mb-4"}>
            <div className={styles["image-background"] + " mr-4"}>
              <div className={styles["image-wrapper"]}>
                <img
                  src={ingredient.image}
                  alt={ingredient.name}
                  className={styles.image}
                />
              </div>
            </div>

            <p className={styles.name + " text text_type_main-default mr-4"}>
              {ingredient.name}
            </p>

            <div className={styles.row}>
              <p className="text text_type_digits-default mr-2">
                {`${ingredient.count} x ${ingredient.price}`}
              </p>
              <CurrencyIcon type="primary" />
            </div>
          </li>
        ))}
      </ul>

      <div className={styles.row}>
        <p className="text text_type_main-default text_color_inactive">
          {date}
        </p>
        <div className={styles.row}>
          <p className="text text_type_digits-default mr-2">{total}</p>
          <CurrencyIcon type="primary" />
        </div>
      </div>
    </div>
  );
}

export default OrderInfo;
