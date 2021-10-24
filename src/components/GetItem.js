

export const getItem = (
    products,
    itemId,
    setMessage,
    setIsSuccess,
    setIsLoading,
    setIsFinished,
    setCurrentProducts
  ) => {
    const productsResponse = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(products);
      }, 2000);
    });
  
    productsResponse
      .then((result) => {
        setIsSuccess(true);
        console.log(products)
        console.log("GetItem #itemId: ", itemId)
        itemId = parseInt(itemId.itemId)
        console.log("GetItem #itemId Parsed: ", itemId)
        setCurrentProducts(result.find(id => id.id === itemId));
        console.log(result.find(id => id.id === itemId));
      })
      .catch((error) => {
        console.log(`Error in progress ${error}`);
        setMessage(`Error: ${error}`);
        setIsSuccess(false);
      })
      .finally(() => {
        setIsFinished(true);
        setIsLoading(false);
      });
  };