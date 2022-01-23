import AppHeader from "../app-header/app-header";
import BurgerIngredients from "../burger-ingredients/burger-ingredients";
import BurgerConstructor from "../burger-constructor/burger-constructor";
import { API, checkResponse } from "../../utils/api";
import styles from "./app.module.css";
import { useState, useEffect } from "react";

function App() {
  const [state, setState] = useState({
    ingredientsData: [],
    loading: true,
    hasError: false,
  });

  useEffect(() => {
    getIngredientsData();
  }, []);

  const getIngredientsData = async () => {
    try {
      setState({ ...state, loading: true, hasError: false });
      const res = await fetch(`${API}/ingredients`);
      const { data } = await checkResponse(res, "application/json");
      setState({ ingredientsData: data, loading: false });
    } catch (err) {
      setState({ ...state, loading: false, hasError: true });
    }
  };

  return (
    <>
      {state.hasError ? (
        <>
          <h1>Что-то пошло не так...</h1>
          <p>В приложении произошла ошибка. Пожалуйста, перезагрузите страницу.</p>
        </>
      ) : (
        <>
          <AppHeader />
          <main className={styles.main}>
            <BurgerIngredients data={state.ingredientsData} />
            <BurgerConstructor data={state.ingredientsData} />
          </main>
        </>
      )}
    </>
  );
}

export default App;
