import { useLocalStorage } from "@uidotdev/usehooks";
import useFetch from "../../hooks/useFetch";
import ProductCard from "../productcard/ProductCard";

const MyFavourite = () => {
  const { products } = useFetch();
  const [favourites] = useLocalStorage("Favorites", []);

  const favouritesProduct = products.filter((product) =>
    favourites.includes(product.id)
  );

  return (
    <section className="products">
      {favouritesProduct.map((product) => (
        <ProductCard isFavourite={true} key={product.id} product={product} />
      ))}
    </section>
  );
};

export default MyFavourite;
