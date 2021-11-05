import React, {useContext} from "react";
import {NavLink} from "react-router-dom";
import {Table, Button} from "react-bootstrap";
import './Cart.css';
import { CartContext } from "../context/cartContext";
import DeleteWidget from "./DeleteWidget";
import { IconContext } from "react-icons";
import { BsTrashFill} from 'react-icons/bs';




const Cart = () => {
  const { items } = useContext(CartContext);
  const {removeItem} = useContext(CartContext);
  const {clearCart} = useContext(CartContext);

  const calculateTotal = () => {
    let total = 0;
    for (let i = 0; i < items.length; i++) {
      total += parseFloat(items[i].item.price) * items[i].quantity;
    }
    return total.toFixed(2);
  }

  const handleClearCart = () => {
    clearCart();
  };
 
  
  return (
    items.length !== 0 ? (
    <div id="cartContainer" className="p-3">
      <h1>Cart</h1>
     
      <div className="container" style={{display:'flex', justifyContent:'end'}} id="totalContainer">
        <h4 style={{margin: "2rem", fontSize: "2rem"}}>Total: ${calculateTotal()}</h4>
        <IconContext.Provider value={{ color: "white", backgroundcolor: "rgb(36, 34, 34)", size: "2rem", className: "global-class-name" }} id="trashIcon">
          <div onClick={handleClearCart}>
            <BsTrashFill />
          </div>
        </IconContext.Provider>
      </div>
      
      {items.map((currentItem) => {
        const { item } = currentItem;
        const itemId = currentItem.item.id;
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