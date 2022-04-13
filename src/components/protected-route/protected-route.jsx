import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect, Route } from "react-router-dom";
import { getUser } from "../../services/actions/user";
import PropTypes from "prop-types";

function ProtectedRoute({ children, ...rest }) {
  const dispatch = useDispatch();
  const [isUserLoaded, setUserLoaded] = useState(false);
  const { name, email } = useSelector((store) => store.user.data);

  const init = async () => {
    await dispatch(getUser());
    setUserLoaded(true);
  }

  useEffect(() => {
    init();
  }, [dispatch]);

  if(!isUserLoaded) {
    return null;
  }

  return (
    <Route
      {...rest}
      render={({ location }) =>
        name || email ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: '/login',
              state: { from: location }
            }}
          />
        )
      }
    />
  );
}

ProtectedRoute.propTypes = {
  children: PropTypes.element.isRequired,
};

export default ProtectedRoute;
