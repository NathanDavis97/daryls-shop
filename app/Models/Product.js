import { generateId } from "../Utils/GenerateId.js";


export default class Product {
  constructor({ title, description, price, img }) {
    console.log("from prodcuts")
    console.log(title);
    this.id = generateId()
    this.title = title
    this.description = description
    this.price = price
    this.img = img
  }
  get Template() {
    return /*html*/ `
    <div class="card  col-3">
        <img class="card-img-top" src="${this.img}" alt="">
        <div class="card-body">
          <h3 class="card-title">${this.title}</h3>
          <h5 class="card-text">$ ${this.price}</h5>
          <p class="card-text">${this.description}</p>
          <button type="button" class="btn btn-danger" onclick="app.productsController.removeProduct('${this.id}')">delete</button>
          <button type="button" class="btn btn-success" onclick="app.cartsController.createCartItem('${this.title}', '${this.description}', '${this.price}', '${this.img}' )"
          >add to cart</button>  
        </div>
    </div>`
  }
}