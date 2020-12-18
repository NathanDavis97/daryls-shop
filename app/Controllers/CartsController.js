import { ProxyState } from "../AppState.js"
import { cartItemService } from "../Services/CartService.js"

function _drawCarts() {
  console.log("drawing products")
  let cartItems = ProxyState.cartItems
  let template = ''
  cartItems.forEach(cartItem => {
    template += cartItem.Template
  })
  document.getElementById('cart').innerHTML = template
}

export default class CartsController {
  constructor() {
    ProxyState.on("cartItems", _drawCarts)
    _drawCarts()
  }
  createCartItem(title, description, price, img) {

    console.log("creating a car")
    let newCartItem = {
      title: title,
      price: price,
      description: description,
      img: img,

    }
    cartItemService.createCartItem(newCartItem)
    console.log("creating new product in controller to service")
  }
  removeCartItem(id) {
    cartItemService.removeCartItem(id)
  }

}

