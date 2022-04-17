import React from "react";
import { Switch, Route, useRouteMatch } from "react-router-dom";
import OrdersList from "../../components/orders-list/orders-list";
import OrdersStatus from "../../components/orders-status/orders-status";
import OrderInfo from "../../components/order-info/order-info";
import styles from "./orders.module.css";

function Orders() {
  const { path } = useRouteMatch();

  return (
    <>
      <Switch>
        <Route path={path} exact>
          <div className={styles["orders-container"]}>
            <h1 className={styles.title + " text text_type_main-large"}>
              Лента заказов
            </h1>
            <div className={styles.orders}>
              <OrdersList type={'simple'}/>
              <OrdersStatus />
            </div>
          </div>
        </Route>
        <Route path={`${path}/:id`}>
          <div className={styles["order-container"]}>
            <OrderInfo />
          </div>
        </Route>
      </Switch>
    </>
  );
}

export default Orders;
