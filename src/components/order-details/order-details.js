import styles from "./order-details.module.css";

function OrderDetails(props) {
  return (
    <div className={styles.details + " pl-10 pr-10 pt-30 pb-30"}>
      <p className="text text_type_digits-large mb-8">{props.order.id}</p>
      <h2 className="text text_type_main-medium mb-15">идентификатор заказа</h2>
      <div className={styles.status + " mb-15"}></div>
      <p className="text text_type_main-default mb-2">
        Ваш заказ начали готовить
      </p>
      <p className="text text_type_main-default text_color_inactive">
        Дождитесь готовности на орбитальной станции
      </p>
    </div>
  );
}

export default OrderDetails;
