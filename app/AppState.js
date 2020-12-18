import CartItem from "./Models/CartItem.js"
import Product from "./Models/Product.js"
import { EventEmitter } from "./Utils/EventEmitter.js"
import { isValidProp } from "./Utils/isValidProp.js"

class AppState extends EventEmitter {
  /** @type {Product[]} */
  products = [new Product({
    title: "newcar", description: "its super old", price: 5, img: "https://d1vl6ykwv1m2rb.cloudfront.net/blog/wp-content/uploads/2018/03/20142414/auto-11.jpg"
  })]
  /** @type {CartItem[]} */
  cartItems = [new CartItem({
    title: "newcar", description: "its super old", price: 5, img: "https://d1vl6ykwv1m2rb.cloudfront.net/blog/wp-content/uploads/2018/03/20142414/auto-11.jpg"
  })]
}

export const ProxyState = new Proxy(new AppState(), {
  get(target, prop) {
    isValidProp(target, prop)
    return target[prop]
  },
  set(target, prop, value) {
    isValidProp(target, prop)
    target[prop] = value
    target.emit(prop, value)
    return true
  }
})
