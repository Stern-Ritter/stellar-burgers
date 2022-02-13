import { CurrencyIcon, Counter } from "@ya.praktikum/react-developer-burger-ui-components";
import PropTypes from "prop-types";
import styles from "./burger-ingredient.module.css";

function BurgerIngredient({ ingredient, openHandler }) {
  return (
    <li
      className={styles.ingredient}
      onClick={() => openHandler(ingredient._id)}
    >
      <img
        className={styles.image + " pl-4 pr-4 mb-1"}
        alt={ingredient.name}
        src={ingredient.image}
      />
      <div className={styles.price + " mb-2"}>
        <p className="text text_type_digits-default mr-2">{ingredient.price}</p>
        <CurrencyIcon type="primary" />
      </div>
      <p className="text text_type_main-default mb-6">{ingredient.name}</p>
      <Counter count={1} size="default" />
    </li>
  );
}

const ingredient = PropTypes.shape({
  _id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
});

BurgerIngredient.propTypes = {
  ingredient: ingredient.isRequired,
  openHandler: PropTypes.func.isRequired,
};

export default BurgerIngredient;
