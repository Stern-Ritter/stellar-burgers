import React from "react";
import { Switch, Route, useRouteMatch } from "react-router-dom";
import ProfileNavigation from "../../components/profile-navigation/profile-navigation";
import ProfileForm from "../../components/profile-form/profile-form";
import styles from "./profile.module.css";

function Profile() {
  const { path } = useRouteMatch();

  return (
    <div className={styles.container}>
      <Switch>
        <Route path={path} exact>
          <ProfileNavigation />
          <ProfileForm />
        </Route>
        <Route path={`${path}/orders`} exact>
          <ProfileNavigation />
        </Route>
        <Route path={`${path}/orders/:id`} exact>
          {null}
        </Route>
      </Switch>
    </div>
  );
}

export default Profile;
