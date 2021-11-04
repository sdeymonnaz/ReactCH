import React, {useContext} from "react";
import {Table} from "react-bootstrap";
//import ItemDetail from "./ItemDetail";
import './Cart.css';
import { CartContext } from "../context/cartContext";
//import DeleteWidget from "./DeleteWidget";




const Cart = () => {
  const { items } = useContext(CartContext);
  const {removeItem} = useContext(CartContext);
  console.log('items en cart', items);
  




  
  return (
    <div id="cartContainer" className="p-3">
      <h1>Cart</h1>
      {items.map((currentItem) => {
        const { item } = currentItem;
        console.log('currentItem: ', currentItem);
        console.log('item: ', item);
        console.log('item.id: ', item.id);
        const itemId = currentItem.item.id;
        console.log('currentItem.item.id: ', currentItem.item.id);
        const quantity = currentItem.quantity;

        const handleRemoveItem = () => {
          removeItem({itemId});
          console.log('items despues de borrar',items)
        };
        
        return (
          <>
          <div className="container">
            <Table striped bordered hover variant="dark" id="cartTable">
              <tbody>
                <tr style={{disply:'flex', justifyContent:'start'}}>
                  <td style={{width: "4rem"}}>ID: {item.id}</td>
                  <td style={{width: "4rem"}}><img alt="cover" src={item.pictureUrl} style={{width: "60px"}}></img></td>
                  <td style={{width: "26rem", textAlign:'left'}}>{item.title}</td>
                  <td style={{width: "8rem", textAlign:'left'}}>${item.price}</td>
                  <td style={{width: "8rem", textAlign:'left'}}>Quantity: {quantity}</td>
                  <td style={{width: "4rem", textAlign:'center'}} onClick={handleRemoveItem}>Remove</td>
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