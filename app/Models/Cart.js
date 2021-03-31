import { generateId } from "../Utils/GenerateId.js"


export default class Cart {
    constructor(make, model, year, price, description, imgUrl = '//placehold.it/150x150') {
        this.id = generateId()
        this.make = make
        this.model = model
        this.year = year
        this.price = price
        this.description = description
        this.imgUrl = imgUrl
    }

    get Template() {
        return `
    <div class="col-md-4 mb-5">
        <div class="card shadow">
            <img class="card-img-top" src="${this.imgUrl}" alt="">
            <div class="card-body text-center">
                <h4 class="card-title">${this.make}: ${this.model}</h4>
                <h4 class="card-title"><u>${this.year} Years || ${this.price} Gold </u></h4>
                <h5 class="card-text pt-3 ">${this.description}</h5>
            </div>
            <div class="px-3 pb-3 d-flex justify-content-between">
                <button type="button" class="btn btn-danger m-1" onclick="app.carsController.deleteCar('${this.id}')">Delete</button>
                <button type="button" class="btn btn-info m-1" onclick="app.carsController.bid('${this.id}')">Bid</button>
            </div>
        </div>
    </div>
    `
    }
}