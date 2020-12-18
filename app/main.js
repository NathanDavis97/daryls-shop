import ProductsController from "./Controllers/ProductsController.js";
import CartsController from "./Controllers/CartsController.js";

class App {
  productsController = new ProductsController
  cartsController = new CartsController
}

window["app"] = new App();
