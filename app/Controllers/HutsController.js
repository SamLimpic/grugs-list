import { ProxyState } from "../AppState.js";
import { hutsService } from "../Services/HutsService.js";


function _draw() {
    let huts = ProxyState.huts
    let template = ''
    huts.forEach(hut => {
        console.log(hut)
        template += hut.Template
    })
    document.getElementById('huts').innerHTML = template
}

//Public
export default class HutsController {
    constructor() {
        ProxyState.on('huts', _draw);

        _draw()
    }


    createHut() {
        window.event.preventDefault()
        const form = window.event.target
        debugger
        let newHut = {
            // @ts-ignore
            bed: form.bed.value,
            // @ts-ignore
            toilet: form.toilet.value,
            // @ts-ignore
            dimensions: form.dimensions.value,
            // @ts-ignore  this converts the string to a number
            price: Number(form.price.value),
            // @ts-ignore
            description: form.description.value,
        }
        hutsService.createHut(newHut)

        // @ts-ignore
        form.reset()

        $('#new-hut-form').modal('hide')
    }

    deleteHut(id) {
        hutsService.deleteHut(id)
    }

    bid(id) {
        hutsService.bid(id)
    }

}
