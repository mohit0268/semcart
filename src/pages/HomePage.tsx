import Loader from "../components/Loader";
import ProductCard from "../components/ProductCard";
import useProducts from "../hooks/useProducts";
import type { Product } from "../types/product.types";

const HomePage = () => {
  const { data, isLoading, error } = useProducts();
  if (isLoading) {
    return <Loader />;
  }
  if (error) {
    return <p>error..</p>;
  }
  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
        {data.map((product:Product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
