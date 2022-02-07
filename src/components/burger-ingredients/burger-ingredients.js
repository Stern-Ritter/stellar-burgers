import { useState } from "react";
import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";
import Modal from "../modal/modal";
import BurgerIngredient from "../burger-ingredient/burger-ingredient";
import IngredientDetails from "../ingredient-details/ingredient-details";
import { dataPropTypes } from "../../utils/api";
import styles from "./burger-ingredients.module.css";
import PropTypes from "prop-types";

function BurgerIngredients(props) {
  const [ categories ] = useState({
    bun: "Булки",
    sauce: "Соусы",
    main: "Начинки",
  });
  const [ currentCategory, setCurrentCategory ] = useState("bun");
  const [ selectedIngredient, setSelectedIngredient ] = useState(null);
  const [ visibleModal, setVisibleModal ] = useState(false);

  const openHandler = (id) => {
    setVisibleModal(true);
    setSelectedIngredient(id);
  };

  const closeHandler = () => {
    setVisibleModal(false);
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
                    .map((ingredient) => (<BurgerIngredient ingredient={ingredient} openHandler={openHandler}/>))
                  }
                </ul>
              </li>
            );
          })}
      </ul>
      {
        visibleModal && <Modal title="Детали ингредиента" closeHandler={closeHandler}>
          <IngredientDetails
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
