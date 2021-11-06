//import { Container, Spinner } from "react-bootstrap";
import "./ItemList.css";
//import { promises } from "./promise";
import Item from "./Item.js";
//import { useParams } from "react-router-dom";

const ItemList = ({ products }) => {
  //const categoryId = useParams();



  return (
    <div className="container-fluid" id="listContainer">
        <Item products = {products} />
    </div>
  );
};

export default ItemList;