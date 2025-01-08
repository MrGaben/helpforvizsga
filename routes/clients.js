const express = require("express")
const router = express.Router()
const clientscontroller = require("../controller/clientscontroller")


router.get("/", clientscontroller.GetClients)
router.get("/orders/:id", clientscontroller.getClientOrders)
router.post('/neworder', clientscontroller.newOrder);


module.exports = router;