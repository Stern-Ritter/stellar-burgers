import { NavLink } from "react-router-dom";
import styles from "./profile-navigation.module.css";

function ProfileNavigation() {
  return (
    <div className={styles.container + " mr-15"}>
      <ul className={styles.links}>
        <li className={styles.item}>
          <NavLink
            to="/profile"
            exact
            className={
              styles.link + " text text_type_main-medium text_color_inactive"
            }
            activeClassName={styles.activeLink}
          >
            Профиль
          </NavLink>
        </li>
        <li className={styles.item}>
          <NavLink
            to="/profile/orders"
            exact
            className={
              styles.link + " text text_type_main-medium text_color_inactive"
            }
            activeClassName={styles.activeLink}
          >
            История заказов
          </NavLink>
        </li>
        <li className={styles.item}>
          <NavLink
            to="/"
            exact
            className={
              styles.link + " text text_type_main-medium text_color_inactive"
            }
            activeClassName={styles.activeLink}
          >
            Выход
          </NavLink>
        </li>
      </ul>
      <p
        className={
          styles.description +
          " text text_type_main-default text_color_inactive"
        }
      >
        В&nbsp;этом разделе вы&nbsp;можете изменить&nbsp;свои персональные данные
      </p>
    </div>
  );
}

export default ProfileNavigation;
