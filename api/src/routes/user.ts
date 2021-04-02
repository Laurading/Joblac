const router = require("express").Router();
//const router = express.Router();
const userCtrl = require("../controllers/user");

router.get("/:email", userCtrl.getUser);
router.post("/register", userCtrl.register);
router.get("/", userCtrl.getAllUsers);

module.exports = router;
