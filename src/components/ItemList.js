import "./ItemList.css";
import Item from "./Item.js";


const ItemList = ({ products }) => {

  return (
    <div className="container-fluid" id="listContainer">
        <Item products = {products} />
    </div>
  );
};

export default ItemList;