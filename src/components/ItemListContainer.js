import { Col, Row} from "react-bootstrap";
import "./ItemListContainer.css";
import {products} from '../products.js';
import ItemList from "./ItemList.js"

const ItemListContainer = ({greeting}) => {
    return <div className="content">
            <Row>
                <Col>
                    <h1>{greeting}</h1>
                    <ItemList products={products} />
                </Col>
            </Row>
        </div>
};

export default ItemListContainer;