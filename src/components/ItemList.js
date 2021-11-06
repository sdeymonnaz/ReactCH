//import { Container, Spinner } from "react-bootstrap";
import "./ItemList.css";
//import { promises } from "./promise";
import Item from "./Item.js";


const ItemList = ({ products }) => {
  
  



  return (
    <div className="container-fluid" id="listContainer">
        <Item products = {products} />
    </div>
  );
};

export default ItemList;