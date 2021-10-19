import { Col, Row} from "react-bootstrap";
import "./ItemListContainer.css";
import ItemList from "./ItemList.js"

const ItemListContainer = ({greeting}) => {
    return <div className="content">
            <Row>
                <Col>
                    <h1>{greeting}</h1>
                    <ItemList />
                </Col>
            </Row>
        </div>
};

export default ItemListContainer;