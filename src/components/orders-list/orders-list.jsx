import React from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import Order from "../order/order";
import styles from "./orders-list.module.css";

function OrdersList({ type, path }) {
  const history = useHistory();

  const orders = useSelector((store) => store.allOrders.orders);

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
