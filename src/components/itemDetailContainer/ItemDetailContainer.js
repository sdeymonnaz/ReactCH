import { useEffect, useState} from "react";
import { Container, Spinner } from "react-bootstrap";
import "./ItemDetailContainer.css";
import ItemDetail from "../itemDetail/ItemDetail";
import { useParams } from "react-router-dom";
import { getFirestore } from "../../firebase";


const ItemDetailContainer = ({ products }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [currentProduct, setCurrentProduct] = useState({});
  const [quantity, setQuantity] = useState(0);
  const {itemId} = useParams();


  useEffect(() => {
    const db = getFirestore();
    const fecthData = db.collection('apoProducts').doc(itemId);
    
    fecthData.get().then(querySnapshot => {
        if (querySnapshot.empty) {
            console.log('No matching document.');
            return;
        }
        setCurrentProduct({id: querySnapshot.id, ...querySnapshot.data()

        });

    }).catch(err => {
        console.log('Error getting documents', err);

    }).finally(() => setIsLoading(false));
}, [itemId]);

  
  return (
    <div className="container-fluid" id="listContainer">
      {isLoading && <Container fluid> <Spinner animation="border" variant="secondary"/></Container>}
      {currentProduct &&  <Container fluid id="detailContainer"> <ItemDetail key = {currentProduct.id} {...currentProduct}  quantity={quantity} setQuantity={setQuantity}/> </Container>}
    </div>
  );
};

export default ItemDetailContainer;