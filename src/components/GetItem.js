import React from "react";
import { products } from "../products";

export default GetItems;

// export const getItem = (
//     products,
//     setMessage,
//     setIsSuccess,
//     setIsLoading,
//     setIsFinished,
//     setCurrentProducts
//   ) => {
//     const productsResponse = new Promise((resolve, reject) => {
//       setTimeout(() => {
//         resolve(products);
//       }, 2000);
//     });
  
//     productsResponse
//       .then((result) => {
//         setIsSuccess(true);
//         setCurrentProducts(result);
//       })
//       .catch((error) => {
//         console.log(`Error in progress ${error}`);
//         setMessage(`Error: ${error}`);
//         setIsSuccess(false);
//       })
//       .finally(() => {
//         setIsFinished(true);
//         setIsLoading(false);
//       });
//   };




const GetItems = ({products}) => {
    const productsResponse = new Promise((resolve, reject, array) => {
        setTimeout(function(){
            resolve(products);
        }, 3000);
    });

    productsResponse.then((result) => {
        console.log(result);
    })


    // productsResponse.then(array => {
    //     console.log(array.find(product => product.id === 3));
    // })

    return (products.find(product => product.id === 3));
}

