import CartsController from "./Controllers/CartsController.js";
import HutsController from "./Controllers/HutsController.js";
import JobsController from "./Controllers/JobsController.js";

class App {
  cartsController = new CartsController();
  hutsController = new HutsController();
  jobsController = new JobsController();
}

window["app"] = new App();
