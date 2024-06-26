import ProductCard from "../../components/productcard/ProductCard";
import useFetch from "../../hooks/useFetch";

const Products = () => {
  const { products } = useFetch();
  const productsArray = products;
  return (
    <section>
      <h1>Products</h1>

      <div className="products">
        {productsArray.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
};

export default Products;
