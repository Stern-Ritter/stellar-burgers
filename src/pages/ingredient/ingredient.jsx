import React, { useMemo } from "react";
import { useSelector } from "react-redux";
import { useHistory, useParams, useLocation } from "react-router-dom";
import Modal from "../../components/modal/modal";
import IngredientDetails from "../../components/ingredient-details/ingredient-details";
import styles from "./ingredient.module.css";

function Ingredient() {
  const history = useHistory();
  const { id } = useParams();
  const { state } = useLocation();
  const ingredientsData = useSelector((store) => store.ingredients.data);

  const selectedIngredient = useMemo(() => {
    return ingredientsData.find((el) => el._id === id);
  }, [ingredientsData, id]);

  const closeHandler = () => {
    history.goBack();
  };

  return (
    <>
      {selectedIngredient &&
        (state?.type === "modal" ? (
          <Modal title="Детали ингредиента" closeHandler={closeHandler}>
            <IngredientDetails ingredient={selectedIngredient} />
          </Modal>
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

export default Ingredient;
