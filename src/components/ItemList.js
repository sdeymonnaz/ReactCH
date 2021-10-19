import { useEffect, useState } from "react";
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
    <div>
      <h1>Promises</h1>
      <h3 className={isSuccess ? "successMessage" : "errorMessages"}>
        {message}
      </h3>
      {isLoading && <h3>Loading...</h3>}
      {isFinished && <h2>Se ha finalizado la respuesta</h2>}
      {currentProducts.map((product) => (
        <Item key={product.id} {...product} />
      ))}
    </div>
  );
};

export default Promises;