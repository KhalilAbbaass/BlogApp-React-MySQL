const { register, login, logout } = require("../controllers/auth");

const router = require("express").Router();

router.post("/register" , register)
router.post("/register" , login)
router.post("/register" , logout)


module.exports = router;