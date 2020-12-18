import { ProxyState } from "../AppState.js"
import CartItem from "../Models/CartItem.js"


class CartItemService {
  removeCartItem(id) {
    ProxyState.cartItems = ProxyState.cartItems.filter(CartItem => CartItem.id != id)

  }
  createCartItem(newCartItem) {
    console.log("from product service")
    let cartItem = new CartItem(newCartItem)
    ProxyState.cartItems = [...ProxyState.cartItems, cartItem]
    console.log("double check service works");
  }
}

export const cartItemService = new CartItemService