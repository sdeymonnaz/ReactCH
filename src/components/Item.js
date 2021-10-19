import {Card, Button, ListGroup, ListGroupItem} from "react-bootstrap";

const Item = ({id, title, description, price, pictureUrl}) =>{
    const showDetails = () => {
        console.log('Detalles del producto');
    };

    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={pictureUrl} />
            <Card.Body>
                <Card.Title><strong>{title}</strong></Card.Title>
                <Card.Text><strong>ID:</strong> {id}</Card.Text>
                <Card.Text><strong>Description:</strong> {description}</Card.Text>
                <Button onClick={showDetails} variant="primary">Ver detalles del producto</Button>
                <ListGroup className="list-group-flush">
                    <ListGroupItem><strong>Price:</strong> {price}</ListGroupItem>
                </ListGroup>
            </Card.Body>
        </Card>
    );
};

export default Item;
