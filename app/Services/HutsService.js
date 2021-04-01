import { ProxyState } from "../AppState.js";
import Hut from "../Models/Hut.js";


class HutsService {
    createHut(newHut) {
        let hut = new Hut(newHut.make, newHut.model, newHut.year, newHut.price, newHut.description)
        ProxyState.huts = [...ProxyState.huts, hut]
    }
    bid(id) {
        let hut = ProxyState.huts.find(hut => hut.id === id)
        hut.price += 100
        ProxyState.huts = ProxyState.huts
    }
    deleteHut(id) {
        ProxyState.huts = ProxyState.huts.filter(hut => hut.id != id)
    }

}

export const hutsService = new HutsService();

