
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
        console.log("categoryId antes de filtro: ", categoryId.categoryId);
        if (categoryId.categoryId) {
          setCurrentProducts(result.filter((product) => product.category === categoryId.categoryId));
          console.log("Filtrado por categoria: ", result.filter((product) => product.category === categoryId.categoryId));
        } else{
          setCurrentProducts(result);
          console.log("No filtrado: ", result);
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