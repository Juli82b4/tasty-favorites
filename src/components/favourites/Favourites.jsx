import useFetch from "../../hooks/useFetch";
import ProductCard from "../productcard/ProductCard";

const Favourites = () => {
  const { rating } = useFetch();

  return (
    <section className="products">
      {rating.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </section>
  );
};

export default Favourites;
