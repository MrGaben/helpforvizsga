const express = require("express")
const router = express.Router()
const ingatlancontroller = require("../controllers/ingatlancontroller.js")


router.get("/ingatlan", ingatlancontroller.getallIngatlan)
router.post("/ingatlan", ingatlancontroller.createingatlan)
router.delete("/ingatlan/:id", ingatlancontroller.deleteIngatlan);
router.put("/ingatlan/:id", ingatlancontroller.updateIngatlan);

module.exports = router;