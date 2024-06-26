import { useEffect, useState } from "react";

const useFetchById = (id) => {
  const [product, setProduct] = useState();

  const fetchProductById = async (id) => {
    const response = await fetch(`https://dummyjson.com/products/${id}`);
    const data = await response.json();
    setProduct(data);
  };

  useEffect(() => {
    fetchProductById(id);
  }, [id]);

  return { product };
};

export default useFetchById;
