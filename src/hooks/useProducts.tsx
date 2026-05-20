import { useQuery } from "@tanstack/react-query";
import { getProducts } from "../apis/productData";

const useProducts = () => {
  return useQuery({
    queryKey: ["products"],
    queryFn: getProducts,
    staleTime: 1000 * 60 * 10,
  });
};

export default useProducts;
