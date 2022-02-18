import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import AppHeader from "../app-header/app-header";
import BurgerIngredients from "../burger-ingredients/burger-ingredients";
import BurgerConstructor from "../burger-constructor/burger-constructor";
import { getIngredients } from "../../services/actions";
import styles from "./app.module.css";

function App() {
  const { hasError } = useSelector((store) => store.ingredients);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getIngredients());
  }, []);

  return (
    <>
      {hasError ? (
        <>
          <h1>Что-то пошло не так...</h1>
          <p>
            В приложении произошла ошибка. Пожалуйста, перезагрузите страницу.
          </p>
        </>
      ) : (
        <>
          <AppHeader />
          <DndProvider backend={HTML5Backend}>
            <main className={styles.main}>
              <BurgerIngredients />
              <BurgerConstructor />
            </main>
          </DndProvider>
        </>
      )}
    </>
  );
}

export default App;
