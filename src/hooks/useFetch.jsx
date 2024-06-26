import { useEffect, useState } from "react";

const useFetch = () => {
  const [products, setProducts] = useState([]);

  /*fetching the api*/
  const fetchProducts = async () => {
    const response = await fetch("https://dummyjson.com/products");

    const data = await response.json();
    setProducts(data.products);
    console.log(products);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return { products };
};

export default useFetch;
