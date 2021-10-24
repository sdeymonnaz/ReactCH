// import { Container, Spinner } from "react-bootstrap";
// import "./ItemDetailContainer.css";
// import ItemDetail from "./ItemDetail";
// import { products } from "../products";


// const getItem = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve(products);
//   }, 2000);
// });

// getItem
//   .then((result) => {
//     const item = result.find(id => id.id === 3)
//     console.log(item);
//     return item;
//   })




  

// const ItemDetailContainer = () => {
//   const item = getItem
//   console.log(item);
//   return (
//     <Container fluid id="detailContainer">
//       <ItemDetail item= {item} {...item} />
//     </Container>


//   )}


// export default ItemDetailContainer;


import { useEffect, useState } from "react";
import { Container, Spinner } from "react-bootstrap";
import "./ItemDetailContainer.css";
import { getItem } from "./GetItem";
import ItemDetail from "./ItemDetail";


const ItemDetailContainer = ({ products }) => {
  const [message, setMessage] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [isFinished, setIsFinished] = useState(false);
  const [currentProducts, setCurrentProducts] = useState([]);

  useEffect(() => {
    if (products) {
      getItem(
        products,
        setMessage,
        setIsSuccess,
        setIsLoading,
        setIsFinished,
        setCurrentProducts
      );
    }
  }, products);
  console.log(products);
  

  return (
    <div className="container-fluid" id="listContainer">
      <h3 className={isSuccess ? "successMessage" : "errorMessages"}>
        {message}
      </h3>
      {isLoading && <Container fluid> <Spinner animation="border" variant="secondary"/></Container>}
      {isFinished}
      {currentProducts.map((item) => (
        <ItemDetail item= {item} {...item} />
      ))}
    </div>
  );
};

export default ItemDetailContainer;