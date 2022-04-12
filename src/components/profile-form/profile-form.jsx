import {
  Input,
} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./profile-form.module.css";

function ProfileForm() {
  return (
    <form className={styles.form}>
      <Input
        type="text"
        placeholder="Имя"
        name="name"
        icon="EditIcon"
        value="Марк"
      />
      <Input
        type="email"
        placeholder="Логин"
        name="email"
        icon="EditIcon"
        value="mail@stellar.burgers"
      />
      <Input
        type="password"
        placeholder="Пароль"
        name="password"
        icon="EditIcon"
        value="passwo"
      />
    </form>
  );
}

export default ProfileForm;
