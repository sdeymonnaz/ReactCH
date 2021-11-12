import React, {useContext} from 'react';
import { Modal, Button } from 'react-bootstrap';
import { CartContext } from "../context/cartContext";


const OrderConfirmation = (props) => {
    const {clearCart} = useContext(CartContext);

    const handleExitCart = () => {
        clearCart();
        props.onHide();
    }

    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Thanks!!!
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4>Order Confirmation</h4>
          <p>
            Dear {props.name}, thank you for your purchase.<br />
            Your order number is {props.orderid}.
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={handleExitCart}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }

export default OrderConfirmation;