import { Container, Spinner } from "react-bootstrap";
import "./ItemDetailContainer.css";
import ItemDetail from "./ItemDetail";
import { products } from "../products";


const getItem = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(products);
  }, 2000);
});

getItem
  .then((result) => {
    const item = result.find(id => id.id === 3)
    console.log(item);
    return item;
  })




  

const ItemDetailContainer = () => {
  const item = getItem
  console.log(item);
  return (
    <Container fluid id="detailContainer">
      <ItemDetail item= {item} {...item} />
    </Container>


  )}


export default ItemDetailContainer;