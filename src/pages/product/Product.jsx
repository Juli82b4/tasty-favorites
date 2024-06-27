import { useState } from "react";
import ProductCard from "../../components/productcard/ProductCard";
import useFetch from "../../hooks/useFetch";
import Button from "../../components/button/Button";

const Products = () => {
  const { products, furniture, beauty, groceries } = useFetch();
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [activeFilter, setActiveFilter] = useState("All");

  const filters = {
    All: products,
    Furniture: furniture,
    Beauty: beauty,
    Groceries: groceries,
  };

  const handleFilterChange = (filter) => {
    setActiveFilter(filter);
    setFilteredProducts(filters[filter]);
  };

  const productsArray =
    filteredProducts?.length > 0 ? filteredProducts : products;

  return (
    <section>
      <h1>Products</h1>

      <div className="filterButtons">
        <Button
          title="All"
          className={activeFilter === "All" ? "active" : ""}
          onClick={() => handleFilterChange("All")}
        />
        <Button
          title="Furniture"
          className={activeFilter === "Furniture" ? "active" : ""}
          onClick={() => handleFilterChange("Furniture")}
        />
        <Button
          title="Beauty"
          className={activeFilter === "Beauty" ? "active" : ""}
          onClick={() => handleFilterChange("Beauty")}
        />
        <Button
          title="Groceries"
          className={activeFilter === "Groceries" ? "active" : ""}
          onClick={() => handleFilterChange("Groceries")}
        />
      </div>

      <div className="products">
        {productsArray.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
};

export default Products;

