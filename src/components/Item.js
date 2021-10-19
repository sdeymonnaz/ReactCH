import {Card, Button, ListGroup, ListGroupItem} from "react-bootstrap";

const Item = ({id, title, description, price, pictureUrl}) =>{
    const showDetails = () => {
        console.log('Detalles del producto');
    };

    return (
        <Card style={{ width: '20rem', color: "black", padding: "1rem", margin: "2rem"}}>
            <Card.Img style={{height: "22rem"}}variant="top" src={pictureUrl} />
            <Card.Body>
                <Card.Title><strong>{title}</strong></Card.Title>
                <Card.Text><strong>ID:</strong> {id}</Card.Text>
                <Card.Text><strong>Description:</strong> {description}</Card.Text>
                <Button onClick={showDetails} variant="primary">Ver detalles del producto</Button>
                <ListGroup className="list-group-flush">
                    <ListGroupItem><strong>Price:</strong> ${price.toFixed(2)}</ListGroupItem>
                </ListGroup>
            </Card.Body>
        </Card>
    );
};

export default Item;
