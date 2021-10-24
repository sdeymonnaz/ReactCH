import React from "react";
import {Row, Col, Card, Button, Container} from "react-bootstrap";
import ItemCount from "./ItemCount";



const ItemDetail = ({title, author, category, description, price, pictureUrl, stock}) => {
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
              <ItemCount stock={stock} initial="0" onAddParams="Add button clicked"/>
              <Button variant="secondary" href="/" style={{padding: '1rem', backgroundColor: 'rgb(36, 34, 34)'}}>Go back</Button>
            </Card.Body>
        </Card>
        </Col>

      </Row>
      
      <div id="detailCont">
        <div id="imageCont">
          
        </div>

      </div>
    </Container>
  );
};

export default ItemDetail;