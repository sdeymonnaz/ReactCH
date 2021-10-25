import cart from '../cart.svg';
import {Container} from 'react-bootstrap';

const CartWidget = () => {
    return(
        <Container>
            <img
                src={cart}
                width="25"
                height="25"
                className="d-inline-block align-top"
                alt="cart logo"
            />
        </Container>
    );
};

export default CartWidget;