export interface Product {
    id:number,
    title:string,
    price:number,
    images:string[],
    slug:string,
    description:string
    category:Category

}


export interface Category{
    id:number,
    name:string,
}


export interface CartItem extends Product {
  quantity: number;
}

export interface CartState {
  items: CartItem[];
  totalItems: number;
  totalPrice: number;
}

export interface CartContextType {
  cartItems: CartItem[];
  addToCart: (product: Product) => void;
  removeFromCart: (id: number) => void;
}