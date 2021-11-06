import {Container, Badge} from 'react-bootstrap';
import { IconContext } from "react-icons";
import React, {useContext} from "react";
import { CartContext } from "../context/cartContext";
import { FaShoppingCart } from 'react-icons/fa';


const CartWidget = () => {
    const { items } = useContext(CartContext);
    const {countItemsInCart} = useContext(CartContext);
    //console.log('items en CartWidget', items);

    const handleCountItemsInCart = countItemsInCart();


    return(
        <>
        {items.length > 0 ? 
        
        <IconContext.Provider
            value={{size: '2.5rem' }}>
            <Container className="d-flex">
                <FaShoppingCart className="m-1" />
                <Badge bg="danger" className="m-2 p-2">{handleCountItemsInCart}</Badge>    
            </Container>
        </IconContext.Provider>
        : (null)}
        </>
    );
};

export default CartWidget;