import Cart from "./Models/Cart.js"
import Hut from "./Models/Hut.js"
import Job from "./Models/Job.js"
import { EventEmitter } from "./Utils/EventEmitter.js"
import { isValidProp } from "./Utils/isValidProp.js"

class AppState extends EventEmitter {
  /** @type {Cart[]} */
  carts = [
    new Cart('Wood', 'One-Wheeled', 10, 2, "It'll take your turnips to market, no problem!"),
    new Cart('Wood', 'Two-Wheeled', 5, 10, "This thing'll hold a whole harvest's worth of turnips!"),
    new Cart('Metal', 'Four-Wheeled', 7, 30, "This'll fit 3 live hogs, and your turnips besides!")
  ]

  /** @type {Hut[]} */
  huts = [
    new Hut(0, 0, 15, 5, "A fine one - room hut with aerated dirt flooring!  Perfect for the young adventurer, early to flee in the morning!"),
    new Hut(1, .5, 20, 10, "This trendy loft features an insulated hay bale (wide enough for two!) and a convenient balcony for your necessaries!"),
    new Hut(2, 1, 50, 25, "A gorgeous pondside hut, complete with stable and on-site outhouse!  Direct access to tepid pondwater, ready to boil!")
  ]

  /** @type {Job[]} */
  jobs = [
    new Job('Junior Developer', 15, 'Per Season', "Get your hands dirty and harvest!  This entry-level position in agricultural development will bear fruit for you!", "Job Duties: tilling, weeding, and general field maintenance."),
    new Job('Skullery Man / Maid', 1, 'Per Week', "Dive into the scalding waters of success!  Potential upward mobility into Lower-Kitchen staff, with free leftovers!", "Job Duties: washing, scrubbing, and general janitorial duties."),
    new Job('Infantry Recruit', 50, 'Per Season', "Gear up and hit the road!  This position offers ample travel and networking opportunities with foreign nations!", "Job Duties: defend your Lord with your inconsequential life!")
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
