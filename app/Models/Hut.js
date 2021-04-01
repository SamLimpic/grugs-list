import { generateId } from "../Utils/GenerateId.js"


export default class Hut {
    constructor(bed, toilet, dimensions, price, description) {
        this.id = generateId()
        this.bed = bed
        this.toilet = toilet
        this.dimensions = dimensions
        this.price = price
        this.description = description
        this.img = '//placehold.it/150x150'
    }

    get Template() {
        return `
    <div class="col-md-4 mb-5">
        <div class="card shadow">
            <img class="card-img-top" src="${this.img}" alt="">
            <div class="card-body text-center">
                <h4 class="card-title">${this.bed} Bed || ${this.toilet} Bath || ${this.dimensions}ft<sup>2</sup> </h4>
                <h4 class="card-title"><u>${this.price} Gold / Season</u></h4>
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