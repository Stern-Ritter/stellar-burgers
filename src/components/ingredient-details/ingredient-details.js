import styles from "./ingredient-details.module.css";

function IngredientDetails(props) {
  return (
    <div className={styles.details + " pl-10 pr-10 pt-10 pb-15"}>
      <h2 className={styles.title + " text text_type_main-large pt-3 pb-3"}>
        {props.title}
      </h2>
      <img
        className={styles.image + " mb-4"}
        alt={props.ingredient.name}
        src={props.ingredient.image_large}
      />
      <p className="text text_type_main-medium mb-8">{props.ingredient.name}</p>
      <ul className={styles.nutrients}>
        <li className={styles.nutrient + " mr-5"}>
          <p className="text text_type_main-default text_color_inactive mb-2">
            Калории,ккал
          </p>
          <p className="text text_type_digits-default text_color_inactive">
            {props.ingredient.calories}
          </p>
        </li>
        <li className={styles.nutrient + " mr-5"}>
          <p className="text text_type_main-default text_color_inactive mb-2">
            Белки, г
          </p>
          <p className="text text_type_digits-default text_color_inactive">
            {props.ingredient.proteins}
          </p>
        </li>
        <li className={styles.nutrient + " mr-5"}>
          <p className="text text_type_main-default text_color_inactive mb-2">
            Жиры, г
          </p>
          <p className="text text_type_digits-default text_color_inactive">
            {props.ingredient.fat}
          </p>
        </li>
        <li className={styles.nutrient}>
          <p className="text text_type_main-default text_color_inactive mb-2">
            Углеводы, г
          </p>
          <p className="text text_type_digits-default text_color_inactive">
            {props.ingredient.carbohydrates}
          </p>
        </li>
      </ul>
    </div>
  );
}

export default IngredientDetails;
