import React from "react";
import styles from "./orders-status.module.css";

function OrdersStatus() {
  const toDoOrders = ["034538", "034541", "034542"];
  const doneOrders = ["034533", "034532", "034530", "034527", "034525"];

  return (
    <div>
      <div className={styles.lists + " mb-15"}>
        <div className={styles["list-container"]}>
          <p className="text text_type_main-medium pb-6">Готовы:</p>
          <ul className={`${styles.list} ${styles.done}`}>
            {doneOrders.map((number, idx) => (
              <li
                key={idx}
                className={styles.item + " text text_type_digits-default"}
              >
                {number}
              </li>
            ))}
          </ul>
        </div>

        <div className={styles["list-container"]}>
          <p className="text text_type_main-medium pb-6">В работе:</p>
          <ul className={styles.list}>
            {toDoOrders.map((number, idx) => (
              <li
                key={idx}
                className={styles.item + " text text_type_digits-default"}
              >
                {number}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <p className="text text_type_main-medium">Выполнено за все время:</p>
      <p className={styles.counter + " text text_type_digits-large mb-15"}>
        28 752
      </p>

      <p className="text text_type_main-medium">Выполнено за сегодня:</p>
      <p className={styles.counter + " text text_type_digits-large"}>138</p>
    </div>
  );
}

export default OrdersStatus;
