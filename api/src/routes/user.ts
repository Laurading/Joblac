const router = require("express").Router();
//const router = express.Router();
const userCtrl = require("../controllers/user");
router.get("/", userCtrl.getAllUsers);
router.get("/:email", userCtrl.getUser);
router.post("/register", userCtrl.register);

module.exports = router;
