import React from "react";
import {Switch, Route, Redirect } from "react-router-dom";

import Home from "./pages/Home";
import Product from "./pages/Product";

export default function Routes() {
  return (

    <Switch>
      <Redirect exact from='/product' to='/' />
      <Route exact path="/" component={Home} />
      <Route path="/product/:name" component={Product} />
    </Switch>
 
  );
}