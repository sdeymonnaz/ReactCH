import { useState, useEffect } from "react";
import { Spinner, Container} from "react-bootstrap";
import "./ItemListContainer.css";
import ItemList from "./ItemList.js"
import { getFirestore } from "../firebase";
import 'firebase/firestore';
import { useParams } from "react-router-dom";
import ToTitleCase from "./ToTitleCase";


const ItemListContainer = ({greeting}) => {
    const[loading, setLoading] = useState(true);
    const[products, setProducts] = useState([]);
    const {categoryId} = useParams();

    
    useEffect(() => {
        const db = getFirestore();
        const itemCollection = db.collection('apoProducts');

        if(!categoryId){
            itemCollection.get().then(querySnapshot => {
                if (querySnapshot.empty) {
                    console.log('No matching documents.');
                    return;
                }
                setProducts(querySnapshot.docs.map((doc) => ({
                    id: doc.id,
                    ...doc.data()
    
                })));
            }).catch(err => {
                console.log('Error getting documents', err);
    
            }).finally(() => setLoading(false));
            return;
        }

        const productsByCategory = itemCollection.where('categoryId', '==', categoryId);

        productsByCategory.get().then(querySnapshot => {
            if (querySnapshot.empty) {
                console.log('No matching documents.');
                return;
            }
            setProducts(querySnapshot.docs.map((doc) => ({
                id: doc.id,
                ...doc.data()

            })));
        }).catch(err => {
            console.log('Error getting documents', err);

        }).finally(() => setLoading(false));

    }, [categoryId]);

    

    return (
        <>
        <div className="content">
            <Container fluid>
                {loading ? (
                    <Container fluid> <Spinner animation="border" variant="secondary"/></Container>
                ) : (
                    <>
                    {!categoryId ? (
                        <h1>{greeting}</h1>
                    ) : (
                        <h1>{ToTitleCase(categoryId)}</h1>
                        )}
                    <ItemList products={products} />
                    </>                                              
                )}    
            </Container>
        </div>
        </>)
};


export default ItemListContainer;