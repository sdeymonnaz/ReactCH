import { useEffect, useState } from "react";
import { Container, Spinner } from "react-bootstrap";
import "./ItemList.css";
import { promises } from "./promise";
import Item from "./Item.js";

const Promises = ({ products }) => {
  const [message, setMessage] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [isFinished, setIsFinished] = useState(false);
  const [currentProducts, setCurrentProducts] = useState([]);

  useEffect(() => {
    if (products) {
      promises(
        products,
        setMessage,
        setIsSuccess,
        setIsLoading,
        setIsFinished,
        setCurrentProducts
      );
    }
  }, [products]);

  return (
    <div className="container-fluid" id="listContainer">
      <h3 className={isSuccess ? "successMessage" : "errorMessages"}>
        {message}
      </h3>
      {isLoading && <Container fluid> <Spinner animation="border" variant="secondary"/></Container>}
      {isFinished}
      {currentProducts.map((product) => (
        <Item id={product.id} {...product} />
      ))}
    </div>
  );
};

export default Promises;