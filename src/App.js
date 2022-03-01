import React from "react";
// react bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
// custom scss
import "./global.scss";
// react router
import { Switch, Route } from "react-router-dom";
// comp
import Header from "./components/Header/Header";
// page
import Home from "./pages/Home";
import Product from "./pages/Products";
import Service from "./pages/Service";

const App = () => {
  return (
    <>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/products" component={Product} />
        <Route exact path="/service" component={Service} />
      </Switch>
    </>
  );
};

export default App;
