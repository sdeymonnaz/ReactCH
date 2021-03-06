import {Card, Button, ListGroup, ListGroupItem} from "react-bootstrap";


const Item = ({id, title, author, description, price, pictureUrl, category, stock}) =>{
    const showDetails = "/item/" + id;

    return (
        <Card style={{ width: '18rem', height: 'auto', color: "black", padding: "1rem", margin: "2rem"}}>
            <Card.Img style={{width: "100%", height: 'auto'}}variant="top" src={pictureUrl} />
            <Card.Body>
                <Card.Title><strong>{title}</strong></Card.Title>
                <Card.Text><strong>Author:</strong> {author}</Card.Text>
                <Card.Text><strong>Category:</strong> {category}</Card.Text>
                <Button href={showDetails} variant="secondary" >Product details</Button>
                <ListGroup className="list-group-flush">
                    <ListGroupItem><strong>Price:</strong> ${price.toFixed(2)}</ListGroupItem>
                </ListGroup>
            </Card.Body>
        </Card>
    );
};

export default Item;
