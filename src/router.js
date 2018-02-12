import React from "react";
import { Switch, Route } from "react-router-dom";


import ProfileView from "./components/views/ProfileView/ProfileView";

export default (
  <Switch>
    <Route path="/profile"  exact component={ProfileView} />
  </Switch>
);