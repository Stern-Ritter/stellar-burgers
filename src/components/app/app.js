import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AppHeader from "../app-header/app-header";
import Main from "../../pages/main/main";
import Login from "../../pages/login/login";
import Register from "../../pages/register/register";
import ForgotPassword from "../../pages/forgot-password/forgot-password";
import ResetPassword from "../../pages/reset-password/reset-password";
import Profile from "../../pages/profile/profile";
import Ingredient from "../../pages/ingredient/ingredient";
import Profile from "../../pages/profile/profile";
import Ingredient from "../../pages/ingredient/ingredient";
import NotFound from "../../pages/not-found/not-found";
import { getIngredients } from "../../services/actions";
import Profile from "../../pages/profile/profile";

function App() {
  const { hasError } = useSelector((store) => store.ingredients);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getIngredients());
  }, [dispatch]);

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
          <Router>
            <Switch>
              <Route path="/" exact>
                <Main />
              </Route>
              <Route path="/login" exact>
                <Login />
              </Route>
              <Route path="/register" exact>
                <Register />
              </Route>
              <Route path="/forgot-password" exact>
                <ForgotPassword />
              </Route>
              <Route path="/reset-password" exact>
                <ResetPassword />
              </Route>
              <Route path="/profile" exact>
                <Profile />
              </Route>
              <Route path="/ingredients/:id" exact>
                <Ingredient />
              </Route>
              <Route>
                <NotFound />
              </Route>
            </Switch>
          </Router>
        </>
      )}
    </>
  );
}

export default App;
