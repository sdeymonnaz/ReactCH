import React, {useContext} from "react";
import ItemDetail from "./ItemDetail";
import './Cart.css';
import { CartContext } from "../context/cartContext";



const Cart = () => {

  const { items } = useContext(CartContext);
  console.log('items en cart', items);
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