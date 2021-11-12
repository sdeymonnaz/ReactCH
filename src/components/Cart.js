import React, {useContext, useState} from "react";
import {NavLink} from "react-router-dom";
import {Table, Button} from "react-bootstrap";
import './Cart.css';
import { CartContext } from "../context/cartContext";
import DeleteWidget from "./DeleteWidget";
import { IconContext } from "react-icons";
import { BsTrashFill} from 'react-icons/bs';
import { getFirestore } from "../firebase";
import firebase from "firebase/compat/app";
import "firebase/firestore";



const Cart = () => {
  const { items } = useContext(CartContext);
  const {removeItem} = useContext(CartContext);
  const {clearCart} = useContext(CartContext);
  const [purchaseSent, setPurchaseSent] = useState(false);
  const [orderCreatedId, setOrderCreatedId] = useState(null);


  const calculateTotal = () => {
    let total = 0;
    for (let i = 0; i < items.length; i++) {
      total += parseFloat(items[i].item.price) * items[i].quantity;
    }
    return total.toFixed(2);
  }

  const total = calculateTotal();

  const handleClearCart = () => {
    clearCart();
  };


  //Configuration to finish purchase
  const buyer = [
    {name: "Juan Perez", phone: "4444-4444", email: "juanperez@gmail.com"}
  ]


  const handleFinishPurchase = () => {
    const newItems = items.map(({item, quantity}) => ({
      item: {
        id: item.id,
        title: item.title,
        price: item.price,
      },
      quantity
    }));

    const newOrder = {
      buyer: buyer,
      items: newItems,
      date: firebase.firestore.Timestamp.fromDate(new Date()),
      total
    }
    console.log("Nueva orden creada: ", newOrder);
    
    const db = getFirestore();
    const orders = db.collection('orders');
    const batch = db.batch();
  
    orders.add(newOrder).then(Response => {
    console.log("Orden creada: ", Response);
    items.forEach(({item, quantity}) => {
      const docRef = db.collection('apoProducts').doc(item.id);
      batch.update(docRef, {stock: item.stock - quantity});
    });
    batch.commit()
    setOrderCreatedId(Response.id);
    setPurchaseSent(true);
    }).catch(error => console.log(error));
  
  }
    


  
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
        {!purchaseSent ? (
        <button onClick={handleFinishPurchase} className="btn btn-success m-3">Finish Purchase</button>
        ) : (<p className="m-3">Your order ID is {orderCreatedId}</p>)}
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
                  {/* <td style={{width: "4rem"}}>ID: {item.id}</td> */}
                  <td style={{width: "4rem"}}><img alt="cover" src={item.pictureUrl} style={{width: "60px"}}></img></td>
                  <td style={{width: "22rem", textAlign:'left', fontSize: '1.5rem'}}>{item.title}</td>
                  <td style={{width: "8rem", textAlign:'left', fontSize: '1.5rem'}}>${item.price}</td>
                  <td style={{width: "8rem", textAlign:'left', fontSize: '1.5rem'}}>Qty: {quantity}</td>
                  <td style={{width: "4rem", textAlign:'center', fontSize: '1.5rem'}} onClick={handleRemoveItem}><DeleteWidget /></td>
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