import { useEffect, useState } from "react";
import { Container, Spinner } from "react-bootstrap";
import "./ItemList.css";
import { promises } from "./promise";
import ItemDetail from "./ItemDetail";

const ItemDetailContainer = ({itemID}) => {
    const [message, setMessage] = useState("");
    const [isSuccess, setIsSuccess] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const [isFinished, setIsFinished] = useState(false);
    const [currentProducts, setCurrentProducts] = useState([]);
  
    useEffect(() => {
      if (itemID) {
        promises(
          itemID,
          setMessage,
          setIsSuccess,
          setIsLoading,
          setIsFinished,
          setCurrentProducts
        );
      }
    }, [itemID]);

  return (
    <div className="container-fluid" id="listContainer">
      <h3 className={isSuccess ? "successMessage" : "errorMessages"}>
        {message}
      </h3>
      {isLoading && <Container fluid> <Spinner animation="border" variant="secondary"/></Container>}
      {isFinished}
        {itemID && <ItemDetail itemID={itemID}/>}
    </div>
  );
};

export default ItemDetailContainer;