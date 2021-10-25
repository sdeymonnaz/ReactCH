
export const promises = (
    products,
    categoryId,
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
        if (categoryId.categoryId) {
          setCurrentProducts(result.filter((product) => product.category === categoryId.categoryId));
        } else{
          setCurrentProducts(result);
        }

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