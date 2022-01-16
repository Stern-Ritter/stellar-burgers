import React from "react";
import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./burger-ingredients.module.css";

function BurgerIngredients() {
  const [current, setCurrent] = React.useState("rolls");
  return (
    <section className={styles.ingredients + " pt-10"}>
      <h1 className={styles.title + " text text_type_main-large pb-5"}>Соберите бургер</h1>
      <nav className={styles.categories + " pb-10"}>
        <Tab value="rolls" active={current === "rolls"} onClick={setCurrent}>Булки</Tab>
        <Tab value="sauces" active={current === "sauces"} onClick={setCurrent}>Соусы</Tab>
        <Tab value="fillings" active={current === "fillings"} onClick={setCurrent}>Начинки</Tab>
      </nav>
    </section>
  );
}

export default BurgerIngredients;
