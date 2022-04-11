import React from "react";
import { Link } from "react-router-dom";
import { Input, Button } from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./forgot-password.module.css";

function ForgotPassword() {
  return (
    <form className={styles.form}>
      <h1 className="text text_type_main-medium mb-6">Восстановление пароля</h1>
      <Input type="email" placeholder="Укажите e-mail" name="email" />
      <Button type="primary" size="medium">
        Восстановить
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

export default ForgotPassword;
