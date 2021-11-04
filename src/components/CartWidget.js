import {Container} from 'react-bootstrap';
import { IconContext } from "react-icons";
import React, {useContext} from "react";
import { CartContext } from "../context/cartContext";
import { FaShoppingCart } from 'react-icons/fa';


const CartWidget = () => {
    const { items } = useContext(CartContext);
    const {countItemsInCart} = useContext(CartContext);
    const {countItems} = useContext(CartContext);
    console.log('items en CartWidget', items);
    //console.log('quantity', items[0].quantity);


    const handleCountItemsInCart = () => {
        countItemsInCart();
  }


    //console.log(handleCountItemsInCart())




    return(
        <>
        {items.length > 0 ? 
        <IconContext.Provider
            value={{size: '1.5em' }}>
            <Container>
                <FaShoppingCart />
            </Container>
        <h6>Total: {handleCountItemsInCart}</h6>
        </IconContext.Provider>
        : (null)}
        </>
    );
};

export default CartWidget;