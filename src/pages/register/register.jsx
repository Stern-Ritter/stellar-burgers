import React from "react";
import { Link } from "react-router-dom";
import {
  Input,
  PasswordInput,
  Button,
} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./register.module.css";

function Register() {
  return (
    <form className={styles.form}>
      <h1 className="text text_type_main-medium mb-6">Регистрация</h1>
      <Input type="text" placeholder="Имя" name="name" />
      <Input type="email" placeholder="E-mail" name="email" />
      <PasswordInput name="password" />
      <Button type="primary" size="medium">
        Зарегистрироваться
      </Button>
      <div className="mt-20 mb-4">
        <span className="text text_type_main-default text_color_inactive mr-2">
          Уже зарегистрированы?
        </span>
        <Link className={styles.link + " text text_type_main-default"}>
          Войти
        </Link>
      </div>
    </form>
  );
}

export default Register;
