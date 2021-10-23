import React from "react";


const ItemDetail = ({title, author, category, description, price, pictureUrl }) => {
  return (
    <div>
        <h3>Product details</h3>
        <img src={pictureUrl} alt={title}/>
        <h4><strong>Title: </strong>{title}</h4>
        <h3><strong>Author: </strong>{author}</h3>
        <h3><strong>Category: </strong>{category}</h3>
        <p><strong>Description: </strong>{description}</p>
        <p><strong>Price: </strong>${price}</p>
    </div>
  );
};

export default ItemDetail;