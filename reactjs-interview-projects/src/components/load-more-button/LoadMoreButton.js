import React, { useEffect, useState } from "react";
import "./styles.css";

export const LoadMoreButton = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [products, setProducts] = useState([]);
  const [count, setCount] = useState(0);
  const [errorMessage, setErrorMessage] = useState(null);
  const [disableButton, setDisableButton] = useState(false);

  const fetchProducts = async () => {
    try {
        setIsLoading(true);
      const response = await fetch(
        `https://dummyjson.com/products?limit=20&skip=${
          count === 0 ? 0 : count * 20
        }`
      );
      const data = await response.json();
      console.log(data);
      if (data && data.products && data.products.length) {
        setIsLoading(false);
        setProducts((prevData) => [...prevData, ...data.products]);
        console.log(products);
      }
    } catch (error) {
      setIsLoading(false);
      setErrorMessage(error.message);
    }
  };
  useEffect(() => {
    fetchProducts();
  }, [count]);

  useEffect(() => {
    if (products && products.length === 100) {
        setDisableButton(true)
    }
  }, [products]);

  if (isLoading) {
    return <div>Data is loading....</div>;
  }

  if (errorMessage !== null) {
    return <div>something went wrong - {errorMessage}</div>;
  }

  return (
    <div className="container-load-more">
      <div className="products-container">
        {products && products.length
          ? products.map((item, index) => (
              <div key={index} className="product">
                <img src={item.thumbnail} alt={item.title} />
                <p>{item.title}</p>
              </div>
            ))
          : null}
      </div>
      <div className="button-container">
        <button disabled={disableButton} onClick={() => setCount(count +1)}>Load More Products</button>
      </div>
    </div>
  );
};
