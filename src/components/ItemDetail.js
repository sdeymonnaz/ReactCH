import React, { useContext} from "react";
import {Row, Col, Card, Button, Container} from "react-bootstrap";
import ItemCount from "./ItemCount";
import { CartContext } from "../context/cartContext";
import { useParams } from "react-router-dom";




const ItemDetail = ({id, title, author, category, description, price, pictureUrl, quantity, setQuantity}) => {
  const {addItem} = useContext(CartContext);
  const {removeItem} = useContext(CartContext);
  const {clearCart} = useContext(CartContext);
  const {isInCart} = useContext(CartContext);
  const {itemId} = useParams();

  const handleAddItem = () => {
    const item = {id, title, price, pictureUrl}
    addItem({item, quantity});
  };

  const handleRemoveItem = () => {
    removeItem({itemId});
  };

  const handleClearCart = () => {
    clearCart();
  };

  const handleIsInCart = () => {
    isInCart({itemId});
  };
    
  return (
    <Container>
      <Row xs={2}>
        <Col>

          <img style={{width:'24rem', padding: '2rem'}} src={pictureUrl} alt={title}/>

        </Col>
        <Col style={{padding: '2rem'}}>
        <Card>
          <Card.Body>
              <h3 style={{padding: '0.2rem'}}><strong>Title: </strong>{title}</h3>
              <h4><strong>Author: </strong>{author}</h4>
              <h5><strong>Category: </strong>{category}</h5>
              <strong>Description: </strong>{description}
              <p style={{padding: '1rem'}}><strong>Price: </strong>${price}</p>
              <ItemCount quantity={quantity} setQuantity={setQuantity} />
              <Button onClick={handleAddItem} variant="outline-dark">Add to Cart</Button>
              <Button onClick={handleRemoveItem} variant="outline-dark">Remove book</Button>
              <Button onClick={handleClearCart} variant="outline-dark">Clear cart</Button>
              <Button onClick={handleIsInCart} variant="outline-dark">Is in cart</Button>
              <Button variant="secondary" href="/" style={{padding: '1rem', margin: '1rem'}}>Back</Button>
              <Button variant="secondary" href="/cart" style={{padding: '1rem', margin: '1rem'}}>Go to cart</Button>
            </Card.Body>
        </Card>
        </Col>

      </Row>
    </Container>
  );
};

export default ItemDetail;