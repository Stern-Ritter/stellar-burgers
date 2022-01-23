import React from "react";
import PropTypes from "prop-types";
import { Tab, CurrencyIcon, Counter } from "@ya.praktikum/react-developer-burger-ui-components";
import Modal from "../modal/modal";
import IngredientDetails from "../ingredient-details/ingredient-details";
import { dataPropTypes } from "../../utils/api";
import styles from "./burger-ingredients.module.css";

function BurgerIngredients(props) {
  const [ categories ] = React.useState({
    bun: "Булки",
    sauce: "Соусы",
    main: "Начинки",
  });
  const [ currentCategory, setCurrentCategory ] = React.useState("bun");
  const [ visible, setVisible ] = React.useState(false);
  const [ selectedIngredient, setSelectedIngredient ] = React.useState(null);

  const openHandler = (id) => {
    setVisible(true);
    setSelectedIngredient(id);
  };

  const closeHandler = () => {
    setVisible(false);
  };

  return (
    <section className=" pt-10">
      <h1 className={styles.title + " text text_type_main-large pb-5"}>Соберите бургер</h1>
      <div className={styles.tabs + " pb-10"}>
        <Tab value="bun" active={currentCategory === "bun"} onClick={setCurrentCategory}>Булки</Tab>
        <Tab value="sauce" active={currentCategory === "sauce"} onClick={setCurrentCategory}>Соусы</Tab>
        <Tab value="main" active={currentCategory === "main"} onClick={setCurrentCategory}>Начинки</Tab>
      </div>
      <ul className={styles.categories}>
        {props.data
          .map((el) => el.type)
          .filter((type, idx, arr) => arr.indexOf(type) === idx)
          .map((type) => {
            return (
              <li key={type}>
                <h2 className="text text_type_main-medium">{categories[type]}</h2>
                <ul className={styles.ingredients + " pl-4 pr-4 pt-6 pb-10"}>
                  {props.data
                    .filter((ingredient) => ingredient.type === type)
                    .map((ingredient, idx) => {
                      return (
                        <li className={styles.ingredient} key={ingredient._id} onClick={ () => openHandler(ingredient._id)}>
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
        visible && <Modal closeHandler={closeHandler}>
          <IngredientDetails
            title="Детали ингредиента"
            ingredient={props.data.find((ingredient) => ingredient._id === selectedIngredient)}>
          </IngredientDetails>
        </Modal>
      }
    </section>
  );
}

BurgerIngredients.propTypes = {
  data: PropTypes.arrayOf(dataPropTypes.isRequired).isRequired,
};

export default BurgerIngredients;
