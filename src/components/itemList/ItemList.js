import "./ItemList.css";
import Item from "../items/Item.js";


const ItemList = ({ products }) => {

  return (
    <div className="container-fluid" id="listContainer">
        <Item products = {products} />
    </div>
  );
};

export default ItemList;