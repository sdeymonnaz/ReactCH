import { useEffect, useState } from "react";
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
      {isLoading && <h3>Loading...</h3>}
      {isFinished}
      {currentProducts.map((product) => (
        <Item key={product.id} {...product} />
      ))}
    </div>
  );
};

export default Promises;