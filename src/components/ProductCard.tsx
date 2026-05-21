import { Link, useNavigate } from "react-router";
import { useCart } from "../hooks/useCart";
import type { Product } from "../types/product.types";


interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const navigate = useNavigate();
  const { addToCart } = useCart();

  return (
    
    <div className="my-10 mx-4 group bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300">
      <Link to={`/products/${product.id}`}/>
      <div className="overflow-hidden bg-gray-100">
        <img
          className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-300"
          src={
            Array.isArray(product.images) ? product.images[0] : product.images
          }
          alt={product.title}
        />
      </div>

      {/* Product Details */}
      <div className="p-4 flex flex-col justify-between h-55">
        <div>
          <h2 className="text-sm md:text-base font-semibold text-gray-900 line-clamp-1">
            {product.title}
          </h2>

          <p className="mt-2 text-sm text-gray-500 line-clamp-3">
            {product.description}
          </p>
        </div>
        

        {/* Price + Button */}
        <div className="mt-4 flex items-center justify-between">
          <span className="text-lg md:text-xl font-bold text-indigo-600">
            ₹{product.price}
          </span>
          
          <button
            onClick={() => {
              addToCart(product);
              navigate("/cart");
            }}
            className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-medium rounded-lg transition-colors duration-200"
          >
            Buy Now
          </button>
        </div>
      </div>
    </div>
    
  );
};

export default ProductCard;
