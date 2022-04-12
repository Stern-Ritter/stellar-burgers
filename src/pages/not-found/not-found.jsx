import React from "react";
import styles from "./not-found.module.css";

function NotFound() {
  return (
    <div className={styles.container}>
        <h1>Упс! Ошибка 404</h1>
        <p>Страница, которую вы запрашиваете не существует</p>
        <p>
          проверьте адрес или перейдите на{" "}
          <Link to="/" className={styles.link}>
            Главную страницу
          </Link>
        </p>
    </div>
  );
}

export default NotFound;
