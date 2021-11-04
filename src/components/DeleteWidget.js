import {Container} from 'react-bootstrap';
import { IconContext } from "react-icons";
import { FaTrash } from 'react-icons/fa';

const DeleteWidget = () => {
    return(
        <IconContext.Provider
            value={{size: '1.5em' }}>
            <Container>
                <FaTrash />
            </Container>
        </IconContext.Provider>
    );
};

export default DeleteWidget;