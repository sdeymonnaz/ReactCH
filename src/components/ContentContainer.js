import { Col, Row} from "react-bootstrap";
import "./ContentContainer.css";

const ContentContainer = ({greeting}) => {
    return <div className="conten">
            <Row>
                <Col>
                    <h1>{greeting}</h1>
                </Col>
            </Row>
        </div>
};

export default ContentContainer;