const express = require("express")
const router = express.Router()
const userController = require("../controllers/carscontroller.js")


router.get("/", userController.getUsers)
router.post("/create", userController.createUser)
router.delete('/delete/:id', userController.deleteUser);


module.exports = router;