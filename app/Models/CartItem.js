import { generateId } from "../Utils/GenerateId.js";

export default class CartItem {
  constructor({ title, description, price, img }) {
    console.log("from cartItem")
    console.log(title);
    this.id = generateId()
    this.title = title
    this.description = description
    this.price = price
    this.img = img
  }
  get Template() {
    return /*html*/ `
    <div class="card col">
        <img class="card-img-top" src="${this.img}" alt="">
        <div class="card-body">
          <h3 class="card-title">${this.title}</h3>
          <h5 class="card-text">$ ${this.price}</h5>
          <p class="card-text">${this.description}</p>
          <button type="button" class="btn btn-danger" onclick="app.cartsController.removeCartItem('${this.id}')">delete</button>
          <button type="button" class="btn btn-success">Purchase</button>  
        </div>
    </div>`
  }
}