import { Col, Row} from "react-bootstrap";
import "./ItemListContainer.css";

const ItemListContainer = ({greeting}) => {
    return <div className="content">
            <Row>
                <Col>
                    <h1>{greeting}</h1>
                </Col>
            </Row>
        </div>
};

export default ItemListContainer;