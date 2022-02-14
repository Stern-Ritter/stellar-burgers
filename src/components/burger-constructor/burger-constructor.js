import { useState, useMemo } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  ConstructorElement,
  DragIcon,
  CurrencyIcon,
  Button,
} from "@ya.praktikum/react-developer-burger-ui-components";
import Modal from "../modal/modal";
import OrderDetails from "../order-details/order-details";
import { getOrder } from '../../services/actions/burger-constructor'
import styles from "./burger-constructor.module.css";

function BurgerConstructor() {
  const ingredientsData = useSelector((store) => store.ingredients.data);
  const ingredients = useSelector((store) => store.constructorIngredients);
  const dispatch = useDispatch();

  const [visibleModal, setVisibleModal] = useState(false);
  const filteredBunIngredient = useMemo(
    () =>
      ingredientsData.filter(
        (ingredient) => ingredient._id === ingredients.bun
      ),
    [ingredientsData, ingredients]
  );

  const filteredMainIngredients = useMemo(
    () =>
      ingredients.main
        .map((id) =>
          ingredientsData.find((ingredient) => ingredient._id === id)
        )
        .filter((element) => element !== undefined),
    [ingredientsData, ingredients]
  );

  const orderCost = useMemo(
    () =>
      [
        ...filteredBunIngredient,
        ...filteredBunIngredient,
        ...filteredMainIngredients,
      ].reduce((sum, ingredient) => (sum += ingredient.price), 0),
    [filteredBunIngredient, filteredMainIngredients]
  );

  const submitOrder = async () => {
    setVisibleModal(true);
    dispatch(getOrder(ingredients));
  };

  const closeHandler = () => {
    setVisibleModal(false);
  };

  return (
    <section className="pt-25 pb-13">
      <ul className={styles.constructor}>
        {filteredBunIngredient.map((ingredient) => {
          return (
            <li className={styles.bun + " pl-4 pr-4"} key={ingredient._id}>
              <ConstructorElement
                type="top"
                isLocked={true}
                text={ingredient.name + " (верх)"}
                price={ingredient.price}
                thumbnail={ingredient.image}
              />
            </li>
          );
        })}
        <li className={styles.ingredients}>
          <ul className={styles.list}>
            {filteredMainIngredients.map((ingredient, idx) => {
              return (
                <li className={styles.ingredient + " pl-2 pr-2"} key={idx}>
                  <DragIcon type="primary" />
                  <ConstructorElement
                    text={ingredient.name}
                    price={ingredient.price}
                    thumbnail={ingredient.image}
                  />
                </li>
              );
            })}
          </ul>
        </li>
        {ingredientsData
          .filter((el) => el._id === ingredients.bun)
          .map((ingredient) => {
            return (
              <li className={styles.bun + " pl-4 pr-4"} key={ingredient._id}>
                <ConstructorElement
                  type="bottom"
                  isLocked={true}
                  text={ingredient.name + " (низ)"}
                  price={ingredient.price}
                  thumbnail={ingredient.image}
                />
              </li>
            );
          })}
      </ul>
      <div className={styles.purchase + " pt-10"}>
        <div className={styles.total + " mr-10"}>
          <p className="text text_type_digits-medium mr-2">{orderCost}</p>
          <CurrencyIcon type="primary" />
        </div>
        <Button type="primary" size="medium" onClick={submitOrder}>Оформить заказ</Button>
      </div>
      {visibleModal && (
        <Modal closeHandler={closeHandler}>
          <OrderDetails></OrderDetails>
        </Modal>
      )}
    </section>
  );
}

export default BurgerConstructor;
