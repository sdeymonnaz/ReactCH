import React from "react";
import {Container, Row, Col, Button, InputGroup} from 'react-bootstrap';
import "./ItemCount.css";
import minus from './dash-circle.svg';
import plus from './plus-circle.svg';


const ItemCount = ({quantity, setQuantity}) =>{

    const increment = () => {
        setQuantity(quantity + 1);
      }        

    const decrement = () => {
      setQuantity(quantity - 1);
    }

    return(
        <Container id="counterContainer">
          <Row id='counter'>
            <Col md='auto'>
            <Button onClick={decrement} id="sign">
                <img src={minus} width="30" height="30" className="d-inline-block align-top" alt="minus" />
            </Button>
            </Col>
            <Col md='auto'>
            <InputGroup className="mb-3" id="countQty">{quantity}</InputGroup>
            </Col>
            <Col md='auto'>
            <Button onClick={increment} id="sign">
                <img src={plus} width="30" height="30" className="d-inline-block align-top" alt="minus" />
            </Button>
            </Col>
          </Row>
        </Container>
    );
};


export default ItemCount;