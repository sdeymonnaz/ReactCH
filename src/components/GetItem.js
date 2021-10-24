
export const getItem = (
    products,
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
        setCurrentProducts(result.find(id => id.id === 3));
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