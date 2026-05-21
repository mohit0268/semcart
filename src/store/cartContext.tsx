import { createContext } from "react";
import type { Product, CartItem } from "../types/product.types";

export interface CartContextType {
  cartItems: CartItem[];
  addToCart: (product: Product) => void;
  removeFromCart: (id: number) => void;
}

export const CartContext = createContext<CartContextType | null>(null);