import React from "react";
import {
  Switch,
  Route,
  useHistory,
  useParams,
  useLocation,
  useRouteMatch,
} from "react-router-dom";
import ProfileNavigation from "../../components/profile-navigation/profile-navigation";
import ProfileForm from "../../components/profile-form/profile-form";
import OrdersList from "../../components/orders-list/orders-list";
import OrderInfo from "../../components/order-info/order-info";
import Modal from "../../components/modal/modal";
import styles from "./profile.module.css";

function Profile() {
  const history = useHistory();
  const { id } = useParams();
  const { state } = useLocation();
  const { path } = useRouteMatch();

  const closeHandler = () => {
    history.goBack();
  };

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
          <OrdersList type="enhanced" path={`${path}/orders`} />
        </div>
      </Route>

      <Route path={`${path}/orders/:id`} exact>
        {state?.type === "modal" ? (
          <Modal closeHandler={closeHandler}>
            <div className={styles["modal-container"]}>
              <OrderInfo type="modal"/>
            </div>
          </Modal>
        ) : (
          <div className={styles["order-container"]}>
            <OrderInfo />
          </div>
        )}
      </Route>
    </Switch>
  );
}

export default Profile;
