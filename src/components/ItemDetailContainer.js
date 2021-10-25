import { useEffect, useState } from "react";
import { Container, Spinner } from "react-bootstrap";
import "./ItemDetailContainer.css";
import { getItem } from "./GetItem";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";


const ItemDetailContainer = ({ products }) => {
  const [message, setMessage] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [isFinished, setIsFinished] = useState(false);
  const [currentProducts, setCurrentProducts] = useState([]);
  const itemId = useParams();
  console.log(itemId);

  useEffect(() => {
    if (products) {
      getItem(
        products,
        itemId,
        setMessage,
        setIsSuccess,
        setIsLoading,
        setIsFinished,
        setCurrentProducts
      );
    }
  }, [products, itemId]);
  

  return (
    <div className="container-fluid" id="listContainer">
      <h3 className={isSuccess ? "successMessage" : "errorMessages"}>
        {message}
      </h3>
      {isLoading && <Container fluid> <Spinner animation="border" variant="secondary"/></Container>}
      {isFinished}
      {currentProducts &&  <Container fluid id="detailContainer"> <ItemDetail key= {currentProducts} {...currentProducts} /> </Container>}
    </div>
  );
};

export default ItemDetailContainer;