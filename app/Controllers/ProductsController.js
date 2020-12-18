import { ProxyState } from "../AppState.js"
import { productsService } from "../Services/ProductsService.js"


function _drawProducts() {
  console.log("drawing products")
  let products = ProxyState.products
  let template = ''
  products.forEach(product => {
    template += product.Template
  })
  document.getElementById('app').innerHTML = template
}

export default class ProductController {
  constructor() {
    ProxyState.on("products", _drawProducts)
    _drawProducts()
  }
  createProduct() {
    window.event.preventDefault()
    console.log("creating a car")
    let form = window.event.target
    let newProduct = {
      title: form['title'].value,
      price: form['price'].value,
      description: form['description'].value,
      img: form['img'].value,
    }
    productsService.createProduct(newProduct)
    console.log("creating new product in controller to service")
    // @ts-ignore
    form.reset()
  }
  removeProduct(id) {
    productsService.removeProduct(id)
  }

}