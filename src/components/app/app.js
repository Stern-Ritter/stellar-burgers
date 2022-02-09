import { useState, useEffect } from "react";
import AppHeader from "../app-header/app-header";
import BurgerIngredients from "../burger-ingredients/burger-ingredients";
import BurgerConstructor from "../burger-constructor/burger-constructor";
import { API, checkResponse } from "../../utils/api";
import { IngredientsContext, OrderContext } from "../../services/appContext";
import styles from "./app.module.css";

function App() {
  const [ingredients, setIngredients] = useState({
    data: [],
    loading: true,
    hasError: false,
  });

  const [orderState, setOrderState] = useState({
    data: null,
    loading: true,
    hasError: false,
  });

  useEffect(() => {
    getIngredientsData();
  }, []);

  const getIngredientsData = async () => {
    try {
      setIngredients({ ...ingredients, loading: true, hasError: false });
      const res = await fetch(`${API}/ingredients`);
      const { data } = await checkResponse(res, "application/json");
      setIngredients({ ...ingredients, data, loading: false });
    } catch (err) {
      setIngredients({ ...ingredients, loading: false, hasError: true });
    }
  };

  return (
    <>
      {ingredients.hasError ? (
        <>
          <h1>Что-то пошло не так...</h1>
          <p>
            В приложении произошла ошибка. Пожалуйста, перезагрузите страницу.
          </p>
        </>
      ) : (
        <>
          <AppHeader />
          <main className={styles.main}>
            <IngredientsContext.Provider value={ingredients.data}>
              <OrderContext.Provider value={{ orderState, setOrderState }}>
                <BurgerIngredients />
                <BurgerConstructor />
              </OrderContext.Provider>
            </IngredientsContext.Provider>
          </main>
        </>
      )}
    </>
  );
}

export default App;
