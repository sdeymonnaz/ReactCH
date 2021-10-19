
export const promises = (
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
        setMessage(`Result is correct ${JSON.stringify(result)}`);
        setIsSuccess(true);
        setCurrentProducts(result);
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