import React, {useContext} from "react";
import {NavLink} from "react-router-dom";
import {Table, Button} from "react-bootstrap";
import './Cart.css';
import { CartContext } from "../context/cartContext";
import DeleteWidget from "./DeleteWidget";




const Cart = () => {
  const { items } = useContext(CartContext);
  const {removeItem} = useContext(CartContext);
  console.log('items en cart', items);

  const calculateTotal = () => {
    let total = 0;
    for (let i = 0; i < items.length; i++) {
      total += parseFloat(items[i].item.price) * items[i].quantity;
      console.log('price', items[i].item.price);
    }
    return total.toFixed(2);
  }
 
  console.log('total', calculateTotal());

  
  return (
    items.length !== 0 ? (
    <div id="cartContainer" className="p-3">
      <h1>Cart</h1>
      <div className="container" style={{display:'flex', justifyContent:'end'}}>
        <h4>Total: ${calculateTotal()}</h4>
      </div>
      {items.map((currentItem) => {
        const { item } = currentItem;
        console.log('currentItem in Cart: ', currentItem);
        console.log('item in Cart: ', item);
        console.log('item.id in Cart: ', item.id);
        const itemId = currentItem.item.id;
        console.log('currentItem.item.id in Cart: ', currentItem.item.id);
        const quantity = currentItem.quantity;

        const handleRemoveItem = () => {
          removeItem({itemId});
        };
        
        return (
          <>
          <div className="container">
            <Table striped bordered hover variant="dark" id="cartTable">
              <tbody>
                <tr>
                  <td style={{width: "4rem"}}>ID: {item.id}</td>
                  <td style={{width: "4rem"}}><img alt="cover" src={item.pictureUrl} style={{width: "60px"}}></img></td>
                  <td style={{width: "26rem", textAlign:'left'}}>{item.title}</td>
                  <td style={{width: "8rem", textAlign:'left'}}>${item.price}</td>
                  <td style={{width: "8rem", textAlign:'left'}}>Quantity: {quantity}</td>
                  <td style={{width: "4rem", textAlign:'center'}} onClick={handleRemoveItem}><DeleteWidget /></td>
                </tr>
              </tbody>
            </Table>
          </div>      
         </>
        )
      })}
    </div>
    ) : (
      <div id="cartContainer">
        <h1>Cart is empty</h1>
        <NavLink to="/"><Button variant="secondary" style={{padding: '1rem', margin: '1rem'}}>Home</Button></NavLink>
        

        
      </div>
    )
  );
};

export default Cart;