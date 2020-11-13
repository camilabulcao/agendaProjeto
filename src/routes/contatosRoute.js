const express = require("express")
const router = express.Router()
const controller = require("../controller/contatosController")

router.get("/", controller.getAll)
router.post("/criar", controller.addContato)
router.get("/id/:id", controller.getContatoID)

module.exports = router