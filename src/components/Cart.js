import React, {useContext} from "react";
import {Table} from "react-bootstrap";
//import ItemDetail from "./ItemDetail";
import './Cart.css';
import { CartContext } from "../context/cartContext";




const Cart = () => {

  const { items } = useContext(CartContext);
  console.log('items en cart', items);
  return (
    <div id="cartContainer" className="p-3">
      <h1>Cart</h1>
      {items.map((currentItem) => {
        const { item } = currentItem;
        const quantity = currentItem.quantity;
        
        return (
          <>
          <div className="container">
            <Table striped bordered hover variant="dark" id="cartTable">
              <tbody>
                <tr style={{disply:'flex', justifyContent:'start'}}>
                  <td style={{width: "4rem"}}>ID: {item.id}</td>
                  <td style={{width: "10rem"}}><img alt="cover" src={item.pictureUrl} style={{width: "60px"}}></img></td>
                  <td style={{width: "26rem", textAlign:'left'}}>{item.title}</td>
                  <td style={{width: "10rem", textAlign:'left'}}>${item.price.toFixed(2)}</td>
                  <td>Quantity: {quantity}</td>
                </tr>
              </tbody>
            </Table>
          </div>
          </>
        
        //<ItemDetail {...item} quantity={currentItem.quantity} />
        )
      })}
    </div>
  );
};

export default Cart;