import {Card, Button, ListGroup, ListGroupItem} from "react-bootstrap";
import { NavLink } from "react-router-dom";


const Item = ({products}) =>{
    console.log(products);

    
    return (
        products.map((product) => (
            <Card style={{ width: '18rem', height: 'auto', color: "black", padding: "1rem", margin: "2rem"}}>
                <Card.Img style={{width: "100%", height: 'auto'}} variant="top" src={product.pictureUrl} alt="{product.title}"/>
                <Card.Body>
                    <Card.Title><strong>{product.title}</strong></Card.Title>
                    <Card.Text><strong>Author:</strong> {product.author}</Card.Text>
                    <Card.Text><strong>Category:</strong> {product.category}</Card.Text>
                    <NavLink to={`/item/${product.id}`}><Button variant="secondary" >Product details</Button></NavLink>
                    <ListGroup className="list-group-flush">
                        <ListGroupItem><strong>Price:</strong> ${product.price.toFixed(2)}</ListGroupItem>
                    </ListGroup>
                </Card.Body>
            </Card>
        ))
    )
};

export default Item;
