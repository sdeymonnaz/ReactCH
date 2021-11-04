import {Container} from 'react-bootstrap';
import { IconContext } from "react-icons";
import { FaShoppingCart } from 'react-icons/fa';

const CartWidget = () => {
    return(
        <IconContext.Provider
            value={{size: '1.5em' }}>
            <Container>
                <FaShoppingCart />
            </Container>
        </IconContext.Provider>
    );
};

export default CartWidget;