import React, { useState } from "react";
import {Container, Row, Col, Button, InputGroup} from 'react-bootstrap';
import "./ItemCount.css";
import minus from '../dash-circle.svg';
import plus from '../plus-circle.svg';


const ItemCount = ({stock, initial}) =>{
    console.log('Hola')
    const [count, setCount] = useState(parseInt(initial));
    const order = []
    stock = parseInt(stock)


    const increment = () => {
      if (count < stock){
        setCount(count + 1);
      }        
    }

    const decrement = () => {
      if (count > 0){
      setCount(count -1);
      }    
    }

    const onAdd = (count) => {
      order.push(count)
    }

    return(
        <div id="counterContainer">
            <Container>
              <Row id='counter'>
                <Col md='auto'>
                <Button onClick={decrement}>
                    <img
                        src={minus}
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                        alt="minus"
                    />
                </Button>
                </Col>
                <Col md='auto'>
                <InputGroup className="mb-3">{count}</InputGroup>
                </Col>
                <Col md='auto'>
                <Button onClick={increment}>
                    <img
                        src={plus}
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                        alt="minus"
                    />
                </Button>
                </Col>
              </Row>
              <Row>
                <Col md='auto'>
                  <Button onClick={onAdd} variant="outline-primary">Agregar al carrito</Button>{' '}
                </Col>
              </Row>   
            </Container>
        </div>
    );
};

export default ItemCount;