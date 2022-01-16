import React from "react";
import { Logo, BurgerIcon, ListIcon, ProfileIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./app-header.module.css";

class AppHeader extends React.Component {
  render() {
    return (
      <header className={styles.header}>
        <nav className={styles.menu}>
          <ul className={styles.list + " pl-0 pr-0 pt-4 pb-4"}>
            <li className={styles["list-item"] + " pl-5 pr-5 pt-4 pb-4"}>
              <a href="#" target="_blank" className={styles.link + " mr-2"}>
                <BurgerIcon type="primary" />
                <p className="text text_type_main-default ml-2">Конструктор</p>
              </a>
              <a href="#" target="_blank" className={styles.link}>
                <ListIcon type="secondary" />
                <p className="text text_type_main-default text_color_inactive ml-2">Лента заказов</p>
              </a>
            </li>
            <li className={styles["list-item"] + " pl-5 pr-5 pt-4 pb-4"}>
              <a href="#" target="_blank" className={styles.link}>
                <Logo />
              </a>
            </li>
            <li className={styles["list-item"] + " pl-5 pr-5 pt-4 pb-4"}>
              <a href="#" target="_blank" className={styles.link}>
                <ProfileIcon type="secondary" />
                <p className="text text_type_main-default text_color_inactive ml-2">Личный кабинет</p>
              </a>
            </li>
          </ul>
        </nav>
      </header>
    );
  }
}

export default AppHeader;
