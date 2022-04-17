import React from "react";
import Order from "../order/order";
import styles from "./orders-list.module.css";

function OrdersList({ type }) {
  const orders = [
    {
      number: "034535",
      date: "Сегодня, 16:20 i-GMT+3",
      title: "Death Star Starship Main бургер",
      status: 'Создан',
      ingredients: [
        "https://code.s3.yandex.net/react/code/bun-01-mobile.png",
        "https://code.s3.yandex.net/react/code/meat-03-mobile.png",
        "https://code.s3.yandex.net/react/code/core-mobile.png",
        "https://code.s3.yandex.net/react/code/mineral_rings-mobile.png",
        "https://code.s3.yandex.net/react/code/sauce-03-mobile.png",
      ],
      amount: 480,
    },
    {
      number: "034534",
      date: "Сегодня, 13:20 i-GMT+3",
      title: "Interstellar бургер",
      status: 'Готовится',
      ingredients: [
        "https://code.s3.yandex.net/react/code/bun-01-mobile.png",
        "https://code.s3.yandex.net/react/code/meat-03-mobile.png",
        "https://code.s3.yandex.net/react/code/core-mobile.png",
        "https://code.s3.yandex.net/react/code/mineral_rings-mobile.png",
        "https://code.s3.yandex.net/react/code/sauce-03-mobile.png",
        "https://code.s3.yandex.net/react/code/cheese-mobile.png",
        "https://code.s3.yandex.net/react/code/cheese-mobile.png",
        "https://code.s3.yandex.net/react/code/cheese-mobile.png",
        "https://code.s3.yandex.net/react/code/cheese-mobile.png",
      ],
      amount: 560,
    },
    {
      number: "034533",
      date: "Вчера, 13:50 i-GMT+3",
      title: "Black Hole Singularity острый бургер",
      status: 'Выполнен',
      ingredients: [
        "https://code.s3.yandex.net/react/code/bun-01-mobile.png",
        "https://code.s3.yandex.net/react/code/meat-03-mobile.png",
        "https://code.s3.yandex.net/react/code/sp_1-mobile.png",
        "https://code.s3.yandex.net/react/code/sauce-03-mobile.png",
        "https://code.s3.yandex.net/react/code/salad-mobile.png",
      ],
      amount: 510,
    },
    {
      number: "034532",
      date: "2 дня назад, 21:53 i-GMT+3",
      title: "Supernova Infinity бургер",
      status: 'Выполнен',
      ingredients: [
        "https://code.s3.yandex.net/react/code/bun-02-mobile.png",
        "https://code.s3.yandex.net/react/code/meat-02-mobile.png",
        "https://code.s3.yandex.net/react/code/sauce-02-mobile.png",
      ],
      amount: 370,
    },
  ];

  return (
    <ul className={styles.list}>
      {orders.map((order, idx) => (
        <li key={idx} className={type === 'simple' ? "mb-4" : "mb-6"}>
          <Order type={type} {...order} />
        </li>
      ))}
    </ul>
  );
}

export default OrdersList;
