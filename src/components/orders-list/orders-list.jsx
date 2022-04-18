import React from "react";
import { useHistory } from "react-router-dom";
import Order from "../order/order";
import styles from "./orders-list.module.css";

function OrdersList({ orders, type, path }) {
  const history = useHistory();

  const clickHandler = (id) => {
    history.push({ pathname: `${path}/${id}`, state: { type: 'modal' }})
  }

  return (
    <ul className={styles.list}>
      {orders.map((order) => (
        <li key={order._id} className={type === 'simple' ? "mb-4" : "mb-6"}>
          <Order type={type} clickHandler={clickHandler} {...order} />
        </li>
      ))}
    </ul>
  );
}

export default OrdersList;
