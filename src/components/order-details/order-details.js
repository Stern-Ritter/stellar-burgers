import styles from "./order-details.module.css";
import PropTypes from "prop-types";

function OrderDetails(props) {
  return (
    <div className={styles.details + " pl-10 pr-10 pt-30 pb-30"}>
      <p className={styles.id + " text text_type_digits-large mb-8"}>{props.order.id}</p>
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

const order = PropTypes.shape({
  id: PropTypes.number.isRequired
});

OrderDetails.propTypes = {
  order: order.isRequired
}

export default OrderDetails;
