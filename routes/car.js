const express = require("express")
const router = express.Router()
const carscontroller = require("../controller/carscontroller.js")


router.get("/", carscontroller.Getcars)
router.post("/create", carscontroller.createCar)
router.delete('/delete/:id', carscontroller.deleteCar);


module.exports = router;