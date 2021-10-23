import { Col, Row} from "react-bootstrap";
import "./ItemListContainer.css";
import {products} from '../products.js';
import ItemList from "./ItemList.js"
import ItemCount from "./ItemCount";
import ItemDetailContainer from "./ItemDetailContainer";

const ItemListContainer = ({greeting}) => {
    return <div className="content">
            <Row>
                <Col>
                    <h1>{greeting}</h1>
                    <ItemList products={products} />
                    <ItemDetailContainer />
                    <ItemCount stock="5" initial="1" onAdd=""/>
                </Col>
            </Row>
        </div>
};

export default ItemListContainer;