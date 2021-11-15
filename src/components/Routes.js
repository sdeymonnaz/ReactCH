import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import NavBar from "./navBar/NavBar.js";
import ItemDetailContainer from "./itemDetailContainer/ItemDetailContainer";
import ItemListContainer from "./itemListContainer/ItemListContainer";
import NotFound from "./notFound/NotFound";
import Cart from "./cart/Cart";
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