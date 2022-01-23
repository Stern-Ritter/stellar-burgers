import React from "react";
import PropTypes from "prop-types";
import { Tab, CurrencyIcon, Counter } from "@ya.praktikum/react-developer-burger-ui-components";
import Modal from "../modal/modal";
import { dataPropTypes } from "../../utils/api";
import styles from "./burger-ingredients.module.css";

function BurgerIngredients(props) {
  const [state, setState] = React.useState({
    current: "bun",
    categories: {
      bun: "Булки",
      sauce: "Соусы",
      main: "Начинки",
    },
  });

  const setCurrent = (value) => {
    setState({ ...state, current: value });
  };

  const [visible, setVisible] = React.useState(false);

  const openHandler = () => {
    setVisible(true);
  };

  const closeHandler = (evt) => {
    setVisible(false);
  };

  return (
    <section className=" pt-10">
      <h1 className={styles.title + " text text_type_main-large pb-5"}>Соберите бургер</h1>
      <div className={styles.tabs + " pb-10"}>
        <Tab value="bun" active={state.current === "bun"} onClick={setCurrent}>Булки</Tab>
        <Tab value="sauce" active={state.current === "sauce"} onClick={setCurrent}>Соусы</Tab>
        <Tab value="main" active={state.current === "main"} onClick={setCurrent}>Начинки</Tab>
      </div>
      <ul className={styles.categories}>
        {props.data
          .map((el) => el.type)
          .filter((type, idx, arr) => arr.indexOf(type) === idx)
          .map((type) => {
            return (
              <li key={type}>
                <h2 className="text text_type_main-medium">{state.categories[type]}</h2>
                <ul className={styles.ingredients + " pl-4 pr-4 pt-6 pb-10"}>
                  {props.data
                    .filter((ingredient) => ingredient.type === type)
                    .map((ingredient, idx) => {
                      return (
                        <li className={styles.ingredient} key={ingredient._id} onClick={openHandler}>
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
                          {(idx + 1) % 3 === 0 && <Counter count={1} size="default" />}
                        </li>
                      );
                    })}
                </ul>
              </li>
            );
          })}
      </ul>
      {
        visible && <Modal closeHandler={closeHandler}>Ингредиент</Modal>
      }
    </section>
  );
}

BurgerIngredients.propTypes = {
  data: PropTypes.arrayOf(dataPropTypes.isRequired).isRequired,
};

export default BurgerIngredients;
