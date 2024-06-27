import { useParams } from "react-router-dom";
import useFetchById from "../hooks/useFetchById";

const Products = () => {
  const { id } = useParams();
  const product = useFetchById(id);

  return <div>lorem</div>;
};

export default Products;
