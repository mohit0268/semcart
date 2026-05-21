export interface Product {
    id:number,
    title:string,
    price:number,
    images:string[],
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