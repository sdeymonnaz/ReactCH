import { useState, useEffect } from "react";
//import { getFirestore} from '../firebase/index';
import { Col, Row, Spinner, Container} from "react-bootstrap";
import "./ItemListContainer.css";
//import {products} from '../products.js';
import ItemList from "./ItemList.js"
import { getFirestore } from "../firebase";
import 'firebase/firestore';


const ItemListContainer = ({greeting}) => {
    const[loading, setLoading] = useState(true);
    const[products, setProducts] = useState([]);


    useEffect(() => {
        const db = getFirestore();
        const itemCollection = db.collection('products');
        
        itemCollection.get().then(snapshot => {
            console.log(snapshot.docs);
            if (snapshot.empty) {
                console.log('No matching documents.');
                return;
            }
            setProducts(snapshot.docs.map(doc => doc.data({
                id: doc.id,
                ...doc.data()

            })));
        }).catch(err => {
            console.log('Error getting documents', err);

        }).finally(() => setLoading(false));
    }, [])

    console.log(products);
    console.log(loading);


    return <div className="content">
            <Row>
                <Col>
                    <h1>{greeting}</h1>
                    {loading ? (
                        <Container fluid> <Spinner animation="border" variant="secondary"/></Container>
                    ) : (
                        <ItemList products={products} />
                    )}
                </Col>
            </Row>
        </div>
};




export default ItemListContainer;