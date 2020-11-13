const express = require("express")
const router = express.Router()
const controller = require("../controller/contatosController")

router.get("/", controller.getAll)
router.post("/criar", controller.addContato)
router.get("/id/:id", controller.getContatoID)
router.get("/nome/:nome", controller.getByNome)
router.delete("/id/:id", controller.deleteContato)

module.exports = router