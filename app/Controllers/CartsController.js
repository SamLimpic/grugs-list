import { ProxyState } from "../AppState.js";
import { cartsService } from "../Services/CartsService.js";


function _draw() {
    let carts = ProxyState.carts
    let template = ''
    carts.forEach(cart => {
        console.log(cart)
        template += cart.Template
    })
    document.getElementById('carts').innerHTML = template
}

//Public
export default class CartsController {
    constructor() {
        ProxyState.on('carts', _draw);

        _draw()
    }


    createCart() {
        window.event.preventDefault()
        const form = window.event.target
        debugger
        let newCart = {
            // @ts-ignore
            make: form.make.value,
            // @ts-ignore
            model: form.model.value,
            // @ts-ignore
            year: form.year.value,
            // @ts-ignore  this converts the string to a number
            price: Number(form.price.value),
            // @ts-ignore
            description: form.description.value,

        }
        cartsService.createCart(newCart)

        // @ts-ignore
        form.reset()

        $('#new-cart-form').modal('hide')
    }

    deleteCart(id) {
        cartsService.deleteCart(id)
    }

    bid(id) {
        cartsService.bid(id)
    }

}
