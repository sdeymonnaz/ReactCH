import React, {useContext, useState} from "react";
import {NavLink} from "react-router-dom";
import {Table, Button, Modal} from "react-bootstrap";
import './Cart.css';
import { CartContext } from "../../context/cartContext";
import DeleteWidget from "../widgets/DeleteWidget";
import { IconContext } from "react-icons";
import { BsTrashFill} from 'react-icons/bs';
import { getFirestore } from "../../firebase";
import firebase from "firebase/compat/app";
import "firebase/firestore";
import OrderConfirmation from "../orderConfirmation/OrderConfirmation";


const Cart = () => {
  const { items } = useContext(CartContext);
  const {removeItem} = useContext(CartContext);
  const {clearCart} = useContext(CartContext);
  const [purchaseSent, setPurchaseSent] = useState(false);
  const [orderCreatedId, setOrderCreatedId] = useState(null);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [buyer, setBuyer] = useState({});
  const [showModal, setShowModal] = useState(false);
  const [showOrderConfirmation, setShowOrderConfirmation] = useState(false);

  //Function to handle the purchase total to pay calculation
  const calculateTotal = () => {
    let total = 0;
    for (let i = 0; i < items.length; i++) {
      total += parseFloat(items[i].item.price) * items[i].quantity;
    }
    return total.toFixed(2);
  }

  //Calculates total to pay ans store it in variable total
  const total = calculateTotal();

  //FUnction to clear the cart when the bin button is clicked
  const handleClearCart = () => {
    clearCart();
  };

  //Functions to handle the show/hide of customer contact details modal
  const handleCloseModal = () => setShowModal(false);
  const handleShowModal = () => setShowModal(true);
  
  //Function to hande the submission of customer contact details from modal
  const handleSubmit = (e) => {
    handleCloseModal();
    e.preventDefault();
    setBuyer({
        name,
        phone,
        email
    });
  }
  
  //Function to handle the submission of the order to Firebase
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
    setShowOrderConfirmation(true) //Show order confirmation modal in the screen
    
    const db = getFirestore();
    const orders = db.collection('orders');
    const batch = db.batch();
  
    orders.add(newOrder).then(Response => {
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
      <>
      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Contact Details</Modal.Title>
        </Modal.Header>
        <Modal.Body className="form-group">
          <input 
              onChange={(e) => setName(e.target.value)}
              type="text" className="form-control mb-2" placeholder="Name"
          />
          <input 
              onChange={(e) => setPhone(e.target.value)}
              type="text" className="form-control mb-2" placeholder="Phone"
          />
          <input
              onChange={(e) => setEmail(e.target.value)}
              type="text" className="form-control mb-2" placeholder="email"
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>Close</Button>
          <Button variant="success" onClick={handleSubmit}>Submit Details</Button>
        </Modal.Footer>
      </Modal>
      </>
      <div className="container" style={{display:'flex', justifyContent:'end'}} id="totalContainer">
        <h4 style={{margin: "2rem", fontSize: "2rem"}}>Total: ${calculateTotal()}</h4>
        <IconContext.Provider value={{ color: "white", backgroundcolor: "rgb(36, 34, 34)", size: "2rem", className: "global-class-name" }} id="trashIcon">
          <div onClick={handleClearCart}>
            <BsTrashFill />
          </div>
        </IconContext.Provider>
        {!buyer.name ? (
          <Button variant="secondary" className="m-3" onClick={handleShowModal}>Checkout</Button>
        ) : (null)}
        {buyer.name && !purchaseSent ? (
          <button onClick={handleFinishPurchase} className="btn btn-success m-3">Finish Purchase</button>
          ) : (null)}
        {orderCreatedId ? (
            <OrderConfirmation 
            show={showOrderConfirmation}
            onHide={() => setShowOrderConfirmation(false)}
            orderid={orderCreatedId}
            name = {buyer.name}/>
        ) : (null)}
      </div>
      
      {items.map((currentItem) => {
        const { item } = currentItem;
        const itemId = currentItem.item.id;
        const quantity = currentItem.quantity;

        const handleRemoveItem = () => {
          removeItem({itemId});
        };
        
        return (
          <div className="container" key={item.id}>
            <Table striped bordered hover variant="dark" id="cartTable">
              <tbody>
                <tr>
                  <td style={{width: "4rem"}}><img alt="cover" src={item.pictureUrl} style={{width: "60px"}}></img></td>
                  <td style={{width: "22rem", textAlign:'left', fontSize: '1.5rem'}}>{item.title}</td>
                  <td style={{width: "8rem", textAlign:'left', fontSize: '1.5rem'}}>${item.price}</td>
                  <td style={{width: "8rem", textAlign:'left', fontSize: '1.5rem'}}>Qty: {quantity}</td>
                  <td style={{width: "4rem", textAlign:'center', fontSize: '1.5rem'}} onClick={handleRemoveItem}><DeleteWidget /></td>
                </tr>
              </tbody>
            </Table>
          </div>      
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