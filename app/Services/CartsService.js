import { ProxyState } from "../AppState.js";
import Cart from "../Models/Cart.js";


class CartsService {
    createCart(newCart) {
        debugger
        let cart = new Cart(newCart.make, newCart.model, newCart.year, newCart.price, newCart.description, newCart.imgUrl)
        ProxyState.carts = [...ProxyState.carts, cart]
    }
    bid(id) {
        let cart = ProxyState.carts.find(cart => cart.id === id)
        cart.price += 100
        ProxyState.carts = ProxyState.carts
    }
    deleteCart(id) {
        ProxyState.carts = ProxyState.carts.filter(cart => cart.id != id)
    }

}

export const cartsService = new CartsService();

