import { useContext } from "react";
import { OrderContext } from "../../services/appContext";
import styles from "./order-details.module.css";

function OrderDetails() {
  const { orderState } = useContext(OrderContext);

  return (
    <div className={styles.details + " pl-10 pr-10 pt-30 pb-30"}>
      {orderState.loading ? (
        <p className="text text_type_main-default mb-2">
          Идет обработка заказа...
        </p>
      ) : orderState.hasError ? (
        <p className="text text_type_main-default mb-2">
          Ошибка обработки заказа попробуйте чуть позже.
        </p>
      ) : (
        <>
          <p className={styles.id + " text text_type_digits-large mb-8"}>
            {orderState.data.order.number}
          </p>
          <h2 className="text text_type_main-medium mb-15">
            идентификатор заказа
          </h2>
          <div className={styles.status + " mb-15"}></div>
          <p className="text text_type_main-default mb-2">
            Ваш заказ начали готовить
          </p>
          <p className="text text_type_main-default text_color_inactive">
            Дождитесь готовности на орбитальной станции
          </p>
        </>
      )}
    </div>
  );
}

export default OrderDetails;
