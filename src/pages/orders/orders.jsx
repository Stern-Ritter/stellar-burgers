import React from "react";
import {
  Switch,
  Route,
  useHistory,
  useParams,
  useLocation,
  useRouteMatch,
} from "react-router-dom";
import OrdersList from "../../components/orders-list/orders-list";
import OrdersStatus from "../../components/orders-status/orders-status";
import OrderInfo from "../../components/order-info/order-info";
import Modal from "../../components/modal/modal";
import styles from "./orders.module.css";

function Orders() {
  const history = useHistory();
  const { id } = useParams();
  const { state } = useLocation();
  const { path } = useRouteMatch();

  const closeHandler = () => {
    history.goBack();
  };

  return (
    <>
      <Switch>
        <Route path={path} exact>
          <div className={styles["orders-container"]}>
            <h1 className={styles.title + " text text_type_main-large"}>
              Лента заказов
            </h1>
            <div className={styles.orders}>
              <OrdersList type={"simple"} path={path} />
              <OrdersStatus />
            </div>
          </div>
        </Route>

        <Route path={`${path}/:id`}>
          {state?.type === "modal" ? (
            <Modal closeHandler={closeHandler}>
              <div className={styles["modal-container"]}>
                <OrderInfo type="modal" />
              </div>
            </Modal>
          ) : (
            <div className={styles["order-container"]}>
              <OrderInfo />
            </div>
          )}
        </Route>
      </Switch>
    </>
  );
}

export default Orders;
