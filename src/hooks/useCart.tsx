import { useContext } from "react"
import { CartContext } from "../store/cartContext"

export const useCart = () => {
  const context = useContext(CartContext)

  if (!context) {
    throw new Error('Cart context missing')
  }

  return context
}