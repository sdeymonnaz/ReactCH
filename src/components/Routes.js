import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import NavBar from "./NavBar.js";
import ItemDetailContainer from "./ItemDetailContainer";
import ItemListContainer from "./ItemListContainer";

const Routes = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route exact path="/">
          <ItemListContainer />
        </Route>
        <Route exact path="/category/:categoryId">
          <ItemListContainer />
        </Route>
        <Route path="/item/:itemId">
          <ItemDetailContainer />
        </Route>
        <Route path="/cart">
            <h1>Cart</h1>
        </Route>
        <Route path="*">
          <h1>404 Not found</h1>
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;