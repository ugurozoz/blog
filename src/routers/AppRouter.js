import React from "react";
import { Router, Route, Switch, Link, NavLink } from "react-router-dom";
import createHistory from "history/createBrowserHistory";
import DashboardPage from "../components/DashboardPage";
import NotFoundPage from "../components/NotFoundPage";
import EditPostPage from "../components/EditPostPage";
import ShowPostPage from "../components/ShowPostPage";
import CreatePostPage from "../components/CreatePostPage";
import Header from "../components/Header";
import LoginPage from "../components/LoginPage";
import PublicPage from "../components/PublicPage";
import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";

export const history = createHistory();

const AppRouter = () => (
  <Router history={history}>
    <div>
      <Switch>
        <PublicRoute path="/" component={LoginPage} exact={true} />
        <PrivateRoute path="/dashboard" component={DashboardPage} />
        <PrivateRoute path="/create" component={CreatePostPage} />
        <PrivateRoute path="/edit/:id" component={EditPostPage} />
        <PrivateRoute path="/post/:id" component={ShowPostPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </Router>
);

export default AppRouter;
