import { useParams } from "react-router-dom";
import useFetchById from "../../hooks/useFetchById";

const ProductsDetails = () => {
  const { id } = useParams();
  const { product } = useFetchById(id);

  if (!product) {
    return <p>Loading...</p>;
  }

  return (
    <section className="product-details">
      <div className="product-header">
        <p>{product.title}</p>
        <img src={product.images?.[0]} alt={product.title} />
      </div>

      <div className="product-details-section">
        <div>
          <p>Description</p>
          <p>{product.description}</p>
        </div>

        <div>
          <p>Info</p>
          <p>Price: {product.price}</p>
          <br />
          <p>SKU: {product.sku}</p>
          <br />
          <p>{product.availabilityStatus}</p>
          <br />
          <p>{product.warrantyInformation}</p>
          <br />
          <p>{product.returnPolicy}</p>
        </div>

        <div>
          <p>Dimensions</p>
          <p>Width: {product.dimensions?.width}</p>
          <br />
          <p>Height: {product.dimensions?.height}</p>
          <br />
          <p>Depth: {product.dimensions?.depth}</p>
        </div>

        <div>
          <p>Reviews</p>
          {product.reviews?.map((review, index) => (
            <div key={index}>
              <p>
                <strong>{review.reviewerName}</strong>( {review.date} ) Rating:
                {review.rating} - {review.comment}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsDetails;
