import React from "react";
import { Link } from "react-router-dom";
import {
  Input,
  PasswordInput,
  Button,
} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./login.module.css";

function Login() {
  return (
    <form className={styles.form}>
      <h1 className="text text_type_main-medium mb-6">Вход</h1>
      <Input type="email" placeholder="E-mail" name="email" />
      <PasswordInput name="password" />
      <Button type="primary" size="medium">
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
