import { useParams } from "react-router-dom";
import useFetchById from "../../hooks/useFetchById";

const ProductsDetails = () => {
  const { id } = useParams();
  const { product } = useFetchById(id);

  console.log(product);

  return (
    <section className="product-details">
      <div className="product-header">
        <p>{product.title}</p>
        <img src={product.images[0]} alt={product.images[0]} />
      </div>

      <div className="product-details-section">
        <div>
          <p>Description</p>
          <br />
          <p>{product.description}</p>
        </div>

        <div>
          <p>Info</p>
          <br />
          <p>Price: {product.price}</p>
          <br />
          <p>SKU: {product.dimensions.width}</p>
          <br />
          <p>{product.availabilityStatus}</p>
          <br />
          <p>{product.warrantyInformation}</p>
          <br />
          <p>{product.returnPolicy}</p>
        </div>

        <div>
          <p>Dimensions</p>
          <br />
          <p>Width: {product.dimensions.width}</p>
          <br />
          <p>Height: {product.dimensions.height}</p>
          <br />
          <p>Depth: {product.dimensions.depth}</p>
        </div>

        <div>
          <p>Reviews</p>
          <br />
          {product.reviews.forEach(review => {
            {review.reviewerName}
            {review.date}
            {review.rating}
            {review.comment}
          })}
        </div>
      </div>
    </section>
  );
};

export default ProductsDetails;
