import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import asyncComponent from "../../../util/asyncComponent";

const UserManagement = ({ match }) => (
  <div className="app-wrapper">
    <Switch>
      <Redirect
        exact
        from={`${match.url}/`}
        to={`${match.url}/user-management`}
      />
      <Route
        path={`${match.url}/user-management`}
        component={asyncComponent(() => import("./routes/user-management"))}
      />
      <Route
        component={asyncComponent(() =>
          import("app/routes/extraPages/routes/404")
        )}
      />
    </Switch>
  </div>
);

export default Dashboard;
