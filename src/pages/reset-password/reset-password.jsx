import React from "react";
import { Link } from "react-router-dom";
import {
  Input,
  Button,
} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./reset-password.module.css";

function ResetPassword() {
  return (
    <form className={styles.form}>
      <h1 className="text text_type_main-medium mb-6">Восстановление пароля</h1>
      <Input
        type="password"
        placeholder="Введите новый пароль"
        name="password"
        icon="ShowIcon"
      />
      <Input type="text" placeholder="Введите код из письма" name="code" />
      <Button type="primary" size="medium">
        Сохранить
      </Button>
      <div className="mt-20 mb-4">
        <span className="text text_type_main-default text_color_inactive mr-2">
          Вспомнили пароль?
        </span>
        <Link
          to="/login"
          className={styles.link + " text text_type_main-default"}
        >
          Войти
        </Link>
      </div>
    </form>
  );
}

export default ResetPassword;
