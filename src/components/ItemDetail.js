import React, {useContext} from "react";
import {useLocation, NavLink} from "react-router-dom";
import {Button, Container} from "react-bootstrap";
import ItemCount from "./ItemCount";
import { CartContext } from "../context/cartContext";
import { useParams } from "react-router-dom";


const ItemDetail = ({id, title, author, categoryId, description, price, pictureUrl, stock, quantity, setQuantity}) => {
  const location = useLocation();
  const {addItem} = useContext(CartContext);
  const {isInCart} = useContext(CartContext);
  const {itemId} = useParams();
  price = parseFloat(price).toFixed(2);
    
    const handleAddItem = () => {
      const item = {id, title, price, pictureUrl, stock}
    addItem({item, quantity});
  };

  const productAdded = isInCart({itemId}); 
    
  return (
    <> 
    <Container>
    <div className="card mb-3" style={{maxWidth: "900px"}}>
      <div className="row g-0">
        <div className="col-md-4">
          <img src={pictureUrl} className="img-fluid rounded-start p-4" alt={title} />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <h6 className="card-subtitle mb-2 text">{author}</h6>
            <h6 className="card-subtitle mb-2 text-muted">Category: {categoryId}</h6>
            <p className="card-text text-start">{description}</p>
            <p className="card-text" ><small className="text">Price: ${price}</small></p>
          </div>
          {location.pathname === "/cart"? (null) : (
            !productAdded ?
            <>
              <ItemCount quantity={quantity} setQuantity={setQuantity} />
              {quantity > 0 && 
                <Button onClick={handleAddItem} variant="outline-dark">Add to Cart</Button>
              }
            </>
            : (null)
          )}
          <div>
            <NavLink to="/"><Button variant="secondary" style={{padding: '1rem', margin: '1rem'}}>Back</Button></NavLink>
            {productAdded ? (
            <NavLink to="/cart"><Button variant="secondary" style={{padding: '1rem', margin: '1rem'}}>Checkout</Button></NavLink>
            ) : (null)}
          </div>
        </div>
        
      </div>
    </div>
    </Container>
    </>

  );
};

export default ItemDetail;