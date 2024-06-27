import { useEffect, useState } from "react";

const useFetch = () => {
  const [products, setProducts] = useState([]);

  // Fetching the API
  const fetchProducts = async () => {
    const response = await fetch("https://dummyjson.com/products");
    const data = await response.json();
    setProducts(data.products);
  };

  // Filtering
  let rating = products.filter((product) => product.rating > 4.8);
  let furniture = products.filter((product) =>
    product.category.includes("furniture")
  );
  let beauty = products.filter((product) =>
    product.category.includes("Beauty")
  );
  let groceries = products.filter((product) =>
    product.category.includes("groceries")
  );

  useEffect(() => {
    fetchProducts();
  }, []);

  return { products, rating, furniture, beauty, groceries };
};

export default useFetch;
