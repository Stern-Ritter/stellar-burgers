import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Switch, Route, useRouteMatch } from "react-router-dom";
import ProfileNavigation from "../../components/profile-navigation/profile-navigation";
import ProfileForm from "../../components/profile-form/profile-form";
import { getUser } from '../../services/actions/user';
import styles from "./profile.module.css";

function Profile() {
  const dispatch = useDispatch();
  const { path } = useRouteMatch();

  useEffect(() => {
    dispatch(getUser());
  }, [dispatch]);

  return (
    <div className={styles.container}>
      <Switch>
        <Route path={path} exact>
          <ProfileNavigation />
          <ProfileForm />
        </Route>
        <Route path={`${path}/orders`} exact>{null}</Route>
        <Route path={`${path}/orders/:id`} exact>{null}</Route>
      </Switch>
    </div>
  );
}

export default Profile;
