import { ProxyState } from "../AppState.js"
import Product from "../Models/Product.js"



class ProductsService {
  removeProduct(id) {
    ProxyState.products = ProxyState.products.filter(product => product.id != id)

  }
  createProduct(newProduct) {
    console.log("from product service")
    let product = new Product(newProduct)
    ProxyState.products = [...ProxyState.products, product]
    console.log("double check service works");
  }
}

export const productsService = new ProductsService