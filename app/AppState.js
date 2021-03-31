import Cart from "./Models/Cart.js"
import { EventEmitter } from "./Utils/EventEmitter.js"
import { isValidProp } from "./Utils/isValidProp.js"

class AppState extends EventEmitter {
  /** @type {Cart[]} */
  carts = [
    new Cart('Wood', 'One-Wheeled', 10, 15, "It'll take your turnips to market, no problem!"),
    new Cart('Wood', 'Two-Wheeled', 5, 50, "This thing'll hold a whole harvest's worth of turnips!"),
    new Cart('Metal', 'Four-Wheeled', 7, 100, "This'll fit 3 live hogs, and your turnips besides!"),
  ]
}

// NOTE Magic!  No touchy!
export const ProxyState = new Proxy(new AppState(), {
  get(target, prop) {
    isValidProp(target, prop)
    return target[prop]
  },
  set(target, prop, value) {
    isValidProp(target, prop)
    target[prop] = value
    target.emit(prop, value)
    return true
  }
})
