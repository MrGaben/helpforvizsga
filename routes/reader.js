const express = require("express");
const router = express.Router();
const readerController = require("../controller/readercontroller");

router.get("/", readerController.getAllReaders);
router.post("/", readerController.createReader);
router.get("/:id", readerController.getReaderBooks);
router.post("/:id", readerController.addBookToReader);

module.exports = router;