import React from "react";
import { useHistory, useLocation } from "react-router-dom";
import Order from "../order/order";
import { orderPropTypes } from "../../utils/api.ts";
import PropTypes from "prop-types";
import styles from "./orders-list.module.css";

function OrdersList({ orders, type, path }) {
  const location = useLocation();
  const history = useHistory();

  const clickHandler = (id) => {
    history.push({ pathname: `${path}/${id}`, state: { order: location }})
  }

  return (
    <ul className={styles.list}>
      {orders.map((order) => (
        <li key={order._id} className={type === 'simple' ? "mb-4" : "mb-6"}>
          <Order type={type} clickHandler={clickHandler} order={order} />
        </li>
      ))}
    </ul>
  );
}

OrdersList.propTypes = {
  orders: PropTypes.arrayOf(orderPropTypes).isRequired,
  type: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
};

export default OrdersList;
