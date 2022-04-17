import React from "react";
import { Switch, Route, useRouteMatch } from "react-router-dom";
import ProfileNavigation from "../../components/profile-navigation/profile-navigation";
import ProfileForm from "../../components/profile-form/profile-form";
import OrdersList from "../../components/orders-list/orders-list";
import OrderInfo from "../../components/order-info/order-info";
import styles from "./profile.module.css";

function Profile() {
  const { path } = useRouteMatch();

  return (
    <Switch>
      <Route path={path} exact>
        <div className={styles.container}>
          <ProfileNavigation />
          <ProfileForm />
        </div>
      </Route>
      <Route path={`${path}/orders`} exact>
        <div className={styles.container}>
          <ProfileNavigation />
          <OrdersList type='enhanced'/>
        </div>
      </Route>
      <Route path={`${path}/orders/:id`} exact>
        <div className={styles["order-container"]}>
          <OrderInfo />
        </div>
      </Route>
    </Switch>
  );
}

export default Profile;
