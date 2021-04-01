import { generateId } from "../Utils/GenerateId.js"


export default class Job {
    constructor(title, pay, rate, description, duties) {
        this.id = generateId()
        this.title = title
        this.pay = pay
        this.rate = rate
        this.description = description
        this.duties = duties
        this.img = '//placehold.it/150x150'
    }

    get Template() {
        return `
    <div class="col-md-4 mb-5">
        <div class="card shadow">
            <img class="card-img-top" src="${this.img}" alt="">
            <div class="card-body text-center">
                <h4 class="card-title"><strong>${this.pay} Gold </strong>${this.rate}</h4>
                <h4 class="card-title"><u>${this.title}</u></h4>
                <h5 class="card-text pt-3 ">${this.description}</h5>
                <h5 class="card-text pt-3 ">${this.duties}</h5>
            </div>
            <div class="px-3 pb-3 d-flex justify-content-between">
                <button type="button" class="btn btn-danger m-1" onclick="app.carsController.deleteCar('${this.id}')">Delete</button>
                <button type="button" class="btn btn-info m-1" onclick="app.carsController.apply('${this.id}')">Apply</button>
            </div>
        </div>
    </div>
    `
    }
}