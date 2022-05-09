import React, { useMemo } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import IngredientDetails from "../../components/ingredient-details/ingredient-details";
import PropTypes from "prop-types";
import styles from "./ingredient.module.css";

function Ingredient({ type }) {
  const { id } = useParams();
  const ingredientsData = useSelector((store) => store.ingredients.data);

  const selectedIngredient = useMemo(() => {
    return ingredientsData.find((el) => el._id === id);
  }, [ingredientsData, id]);

  return (
    <>
      {selectedIngredient &&
        (type === "modal" ? (
          <IngredientDetails ingredient={selectedIngredient} />
        ) : (
          <div className={styles.container + " pt-30"}>
            <h1 className={styles.title + " text text_type_main-large"}>
              Детали ингредиента
            </h1>
            <IngredientDetails ingredient={selectedIngredient} />
          </div>
        ))}
    </>
  );
}

Ingredient.propTypes = {
  type: PropTypes.string,
};

export default Ingredient;
