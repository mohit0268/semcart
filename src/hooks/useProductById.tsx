import { useQuery } from '@tanstack/react-query'
import { getProductById } from '../apis/productData'

const useProductById = (id:string) => {
  return useQuery({
    queryKey:["product",id],
    queryFn: () => getProductById(id),
    staleTime: 1000 * 60 * 10
  })
}

export default useProductById