import { Link } from "react-router-dom";
import styles from "../productcard/productcard.module.css";

const ProductCard = ({ product }) => {
  return (
    <div>
      <figure className={styles.ProductCard}>
        <Link to={`/products/${product.id}`}>
          <img src={product.images[0]} alt={product.name} />
        </Link>
        <p>{product.title}</p>
      </figure>
    </div>
  );
};

export default ProductCard;
