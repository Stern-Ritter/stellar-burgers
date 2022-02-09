import { useState, useContext } from "react";
import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";
import Modal from "../modal/modal";
import BurgerIngredient from "../burger-ingredient/burger-ingredient";
import IngredientDetails from "../ingredient-details/ingredient-details";
import { IngredientsContext } from "../../services/appContext";
import styles from "./burger-ingredients.module.css";

function BurgerIngredients() {
  const ingredientsData = useContext(IngredientsContext);
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
        {ingredientsData
          .map((el) => el.type)
          .filter((type, idx, arr) => arr.indexOf(type) === idx)
          .map((type) => {
            return (
              <li key={type}>
                <h2 className="text text_type_main-medium">{categories[type]}</h2>
                <ul className={styles.ingredients + " pl-4 pr-4 pt-6 pb-10"}>
                  {ingredientsData
                    .filter((element) => element.type === type)
                    .map((ingredient) => (<BurgerIngredient ingredient={ingredient} key={ingredient._id} openHandler={openHandler}/>))
                  }
                </ul>
              </li>
            );
          })}
      </ul>
      {
        visibleModal && <Modal title="Детали ингредиента" closeHandler={closeHandler}>
          <IngredientDetails
            ingredient={ingredientsData.find((ingredient) => ingredient._id === selectedIngredient)}>
          </IngredientDetails>
        </Modal>
      }
    </section>
  );
}

export default BurgerIngredients;
