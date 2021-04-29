const bookCtrl = require("../controllers/book");
const routerB = require("express").Router();

routerB.get("/:id", bookCtrl.getBook);
routerB.get("/", bookCtrl.getAll);

module.exports = routerB;
