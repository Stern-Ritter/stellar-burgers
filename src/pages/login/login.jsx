import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, Link, Redirect } from "react-router-dom";
import {
  Input,
  PasswordInput,
  Button,
} from "@ya.praktikum/react-developer-burger-ui-components";
import {
  LOGIN_FORM_CLEAR_STATE,
  setLoginFormValue,
  login,
} from "../../services/actions/login";
import styles from "./login.module.css";

function Login() {
  const dispatch = useDispatch();
  const { state } = useLocation();

  useEffect(() => {
    dispatch({ type: LOGIN_FORM_CLEAR_STATE });
  }, [dispatch]);

  const {
    data: { email, password },
    loading,
    success,
    hasError,
  } = useSelector((store) => store.loginForm);

  const onFormChange = (evt) => {
    const input = evt.target;
    dispatch(setLoginFormValue({ field: input.name, value: input.value }));
  };

  const onFormSubmit = (evt) => {
    evt.preventDefault();
    dispatch(login({ email, password }));
  };

  if (success) {
    return <Redirect to={state?.from || "/"} />;
  }

  return (
    <form className={styles.form} onSubmit={onFormSubmit}>
      <h1 className="text text_type_main-medium mb-6">Вход</h1>

      <Input
        type="email"
        placeholder="E-mail"
        name="email"
        value={email}
        onChange={onFormChange}
      />
      <PasswordInput name="password" value={password} onChange={onFormChange} />

      <Button type="primary" size="medium" disabled={loading}>
        Войти
      </Button>

      <div className="mt-20 mb-4">
        <span className="text text_type_main-default text_color_inactive mr-2">
          Вы — новый пользователь?
        </span>
        <Link
          to="/register"
          className={styles.link + " text text_type_main-default"}
        >
          Зарегистрироваться
        </Link>
      </div>

      <div>
        <span className="text text_type_main-default text_color_inactive mr-2">
          Забыли пароль?
        </span>
        <Link
          to="/forgot-password"
          className={styles.link + " text text_type_main-default"}
        >
          Восстановить пароль
        </Link>
      </div>
    </form>
  );
}

export default Login;
