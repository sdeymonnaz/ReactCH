import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import NavBar from "./NavBar.js";
import ItemDetailContainer from "./ItemDetailContainer";
import ItemListContainer from "./ItemListContainer";
import NotFound from "./NotFound";
import Cart from "./Cart";
import { products } from "../products";



const Routes = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route exact path="/">
          <ItemListContainer greeting="Welcome to our store!"/>
        </Route>
        <Route exact path="/category/:categoryId">
          <ItemListContainer products={products}/>
        </Route>
        <Route path="/item/:itemId">
          <ItemDetailContainer products={products}/>
        </Route>
        <Route path="/cart">
            <Cart />
        </Route>
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;