import {Container} from 'react-bootstrap';
import { IconContext } from "react-icons";
import { TiDelete } from 'react-icons/ti';

const DeleteWidget = () => {
    return(
        <IconContext.Provider
            value={{size: '1.5em' }}>
            <Container>
                <TiDelete />
            </Container>
        </IconContext.Provider>
    );
};

export default DeleteWidget;

