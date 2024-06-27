import { Link } from "react-router-dom";
import { FcLike, FcDislike } from "react-icons/fc";
import styles from "../productcard/productcard.module.css";
import { useLocalStorage } from "@uidotdev/usehooks";

const ProductCard = ({ product }) => {
  const [favourites, setFavourites] = useLocalStorage("Favorites", []);
  const isFavourite = favourites.includes(product.id);

  const handleLike = () => {
    setFavourites((prevFavourites) =>
      isFavourite
        ? prevFavourites.filter((fav) => fav !== product.id)
        : [...prevFavourites, product.id]
    );
  };

  return (
    <div>
      <p>{product.title}</p>
      <figure className={styles.ProductCard}>
        <Link to={`/products/${product.id}`}>
          <img src={product.images[0]} alt={product.title} />
        </Link>
        <figcaption>
          <h2 className="textunder">{product.title}</h2>
          {isFavourite ? (
            <FcDislike size={30} onClick={handleLike} />
          ) : (
            <FcLike size={30} onClick={handleLike} />
          )}
        </figcaption>
      </figure>
    </div>
  );
};

export default ProductCard;
