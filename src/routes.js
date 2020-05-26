import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Home from "./pages/Home/Home.jsx";
import Product from "./pages/Product/Product.jsx";

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/product/:name" component={Product} />
      </Switch>
    </BrowserRouter>
  );
}