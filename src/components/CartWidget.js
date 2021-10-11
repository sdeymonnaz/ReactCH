import cart from '../cart.svg';
import {Container} from 'react-bootstrap';

const CartWidget = () => {
    return(
        <Container>
            <img
                src={cart} className="App-logo" alt="logo"
                width="30"
                height="30"
                className="d-inline-block align-top"
                alt="cart logo"
            />
        </Container>
    );
};

export default CartWidget;