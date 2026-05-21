import { makeAutoObservable } from "mobx";
import type { CartItem, Product } from "../types/product.types";

class CartStore {
  items: CartItem[] = JSON.parse(localStorage.get("cart") || "[]");
  constructor() {
    makeAutoObservable(this);
  }
  addItems(product: Product) {
    //finds if an items is already exist
    const isItemPresent = this.items.find((i) => i.id === product.id);
    if (isItemPresent) {
      return (isItemPresent.quantity += 1);
    } else {
      return this.items.push({ ...product, quantity: 1 });
    }
    this.persist();
  }
  removeItem(productId: number) {
    this.items = this.items.filter((item) => item.id !== productId);
    this.persist();
  }

  get totalItems() {
    return this.items.reduce((sum, item) => sum + item.quantity, 0);
  }

  get totalPrice() {
    return this.items.reduce((sum, i) => sum + i.price * i.quantity, 0);
  }

  private persist() {
    localStorage.setItem("cart", JSON.stringify(this.items));
  }
}

export default CartStore;
