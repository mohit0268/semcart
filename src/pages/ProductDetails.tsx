import Loader from "../components/Loader"

import { useParams } from 'react-router-dom'
import useProductById from '../hooks/useProductById'

const ProductDetailsPage = () => {
  const { id } = useParams()

  const { data, isLoading ,error } = useProductById(id || '')

  if (isLoading) {
    return <Loader/>
  }
  if (error){
    return <h1>error</h1>
  }

  return (
    <div>
      <img
        src={data?.images}
        alt={data?.title}
        width='200'
      />

      <h1>{data?.title}</h1>

      <p>{data?.description}</p>

      <h2>${data?.price}</h2>
    </div>
  )
}


export default ProductDetailsPage;