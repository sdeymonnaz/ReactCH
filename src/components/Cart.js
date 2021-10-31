import React from "react";
import ItemDetail from "./ItemDetail";
import './Cart.css';

const Cart = ({items}) => {
  return (
    <div id="cartContainer">
      <h1>Cart</h1>
      {items.map((currentItem) => {
        const { item } = currentItem;
        console.log(item);
        return <ItemDetail {...item} quantity={currentItem.quantity} />
      })}
    </div>
  );
};

export default Cart;